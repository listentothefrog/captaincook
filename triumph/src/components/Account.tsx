import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/firebase/firebase";

const Account = () => {
  const [user] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      width={"50vh"}
      flexDirection={"column"}
      height={"100%"}
    >
      <Box width={"100%"}>
        <Heading fontSize={"16px"} fontWeight={"bold"}>
          Email
        </Heading>
        <Text mt={2} color={"gray.600"}>
          As the law states, "Once you create an account you cannot change your
          email." Sorry :(
        </Text>
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
        <Text mt={2} color={"gray.600"}>
          {user?.emailVerified === true
            ? ""
            : "Your email is not verified, so if you verify your email you can use this superpower ;)"}
        </Text>
        <Button
          onClick={onOpen}
          background={"green.400"}
          color={"white"}
          mt={5}
        >
          Change Password
        </Button>
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Heading
              fontWeight={"bold"}
              textAlign={"center"}
              fontSize={"24px"}
              isDisabled={user?.emailVerified === false}
              mt={2}
            >
              Change password
            </Heading>
            <Text textAlign={"center"} fontSize={"14px"} mt={2} color={"gray"}>
              Enter your current password and then your new password
            </Text>
            <ModalCloseButton />
            <ModalBody>
              <FormControl id="Password" isRequired>
                <FormLabel>Current Password</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" />
                  <Input type="password" placeholder="current password" />
                </InputGroup>
              </FormControl>
              <FormControl mt={2} id="Password" isRequired>
                <FormLabel>New Password</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" />
                  <Input type="password" placeholder="new password" />
                </InputGroup>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Change my mind
              </Button>
              <Button color={"white"} background={"green.400"}>
                Change
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
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
          isDisabled={user?.emailVerified === true}
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
