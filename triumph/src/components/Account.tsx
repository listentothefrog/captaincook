import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/firebase/firebase";

const Account = () => {
  const [user] = useAuthState(auth);
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      flexDirection={"column"}
      height={"100%"}
    >
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
      <Flex flexDirection={"column"} mr={"auto"} mt={10}>
        <Heading fontSize={"16px"}>Password and Autentication</Heading>
        <Button background={"green.400"} color={"white"} mt={5}>
          Change Password
        </Button>
        <Heading mt={5} fontSize={"16px"}>
          Email Verification
        </Heading>
        <Text mt={2} color={"gray.600"}>
          {user?.emailVerified == true
            ? "Your email is already verified, so you don't have to button below ever again ;)"
            : "Your email is not verified, so if you click the button below you will have superpowers ;)"}
        </Text>
        <Button
          onClick={async () => await user?.sendEmailVerification()}
          isDisabled={user?.emailVerified == true}
          background={"green.400"}
          color={"white"}
          mt={5}
        >
          Verify
        </Button>
      </Flex>
    </Flex>
  );
};

export default Account;
