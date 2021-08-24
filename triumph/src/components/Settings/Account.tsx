import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth } from "src/firebase/firebase";
import SpinnerComponent from "../Spinner";
const ProfilePictureComponent = React.lazy(() => import("./ProfilePicture"));

const Account = () => {
  const [user] = useAuthState(auth);

  const history = useHistory();

  const userSignOut = async () => {
    await auth.signOut();
    history.push("/");
  };
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      width={"70vh"}
      flexDirection={"column"}
      height={"100%"}
    >
      <Suspense fallback={<SpinnerComponent />}>
        <ProfilePictureComponent />
      </Suspense>
      <Box width={"100%"}>
        <Heading fontSize={"16px"} fontWeight={"bold"}>
          Email
        </Heading>

        <Input
          mt={2}
          width={"full"}
          isReadOnly
          placeholder="Email"
          value={user?.email! as string}
        />
      </Box>
      <Box
        width={"full"}
        p={1}
        border={1}
        borderBottom={"1px"}
        opacity={".5"}
        mt={2}
      ></Box>
      <Flex flexDirection={"column"} mr={"auto"} mt={2}>
        <Heading mt={5} fontSize={"16px"}>
          Email Verification
        </Heading>
        <Text mt={2} color={"gray.600"}>
          {user?.emailVerified === true
            ? "Your email is already verified, so you don't have to button below ever again ;)"
            : "Your email is not verified, so if you click the button below you will have superpowers ;)"}
        </Text>
        <Button
          onClick={async () => await user?.sendEmailVerification()}
          disabled={user?.emailVerified === true}
          background={"green.400"}
          color={"white"}
          mt={5}
        >
          Verify your email
        </Button>
        <Box
          width={"full"}
          p={1}
          border={1}
          borderBottom={"1px"}
          opacity={".5"}
          mt={2}
        ></Box>
        <Flex flexDirection={"column"} mt={10}>
          <Heading fontSize={"16px"}>Your account</Heading>
          <Text mt={2} color={"gray.600"}>
            Manage your account here, and always be cautious of what you do
            because there are consequences.
          </Text>
          <Button
            onClick={userSignOut}
            background={"green.400"}
            color={"white"}
            mt={5}
          >
            Log out
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Account;
