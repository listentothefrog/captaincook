import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { Suspense, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { auth } from "src/firebase/firebase";
import SpinnerComponent from "../Spinner";
const ProfilePictureComponent = React.lazy(() => import("./ProfilePicture"));

const Account = () => {
  const [user] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const { addToast } = useToasts();

  const userUpdatePassword = async () => {
    await auth
      .sendPasswordResetEmail(email)
      .then(() => {
        addToast("An email was sent to your inbox to reset your password.", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((err) => {
        const message = err.message;
        addToast(message, {
          appearance: "warning",
          autoDismiss: true,
        });
      });
  };

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
      height={"50vh"}
    >
      <Box width={"150px"} height={"150px"}>
        <Suspense
          fallback={
            <SpinnerComponent
              message={"Loading your beautiful profile picture 🔥"}
            />
          }
        >
          <ProfilePictureComponent />
        </Suspense>
      </Box>
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
          Password and Authentication
        </Heading>
        <Text mt={2} color={"gray.600"}>
          {user?.emailVerified === true
            ? ""
            : "Your email is not verified, so if you click the verify button you will have this superpowers ;)"}
        </Text>
        <Button
          width={"70vh"}
          mt={4}
          background={"green.400"}
          color={"white"}
          onClick={onOpen}
          disabled={user?.emailVerified === false}
        >
          Change Password
        </Button>

        <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl width={"100%"} id="Email" isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" />
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="email"
                  />
                </InputGroup>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Link mr={3} onClick={onClose}>
                Close
              </Link>
              <Button
                onClick={userUpdatePassword}
                background={"green.400"}
                color={"white"}
                variant="ghost"
              >
                Change
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
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
