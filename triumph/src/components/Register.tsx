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
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "src/firebase/firebase";
import "react-toastify/dist/ReactToastify.css";

const RegisterComponent = () => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassoword, setConfirmPassoword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const history = useHistory();

  const createAccount = async () => {
    if (password !== confirmPassoword)
      toast.error("Password's don't match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    if (error !== "") setError("");
    setRegistering(true);

    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        auth.currentUser?.sendEmailVerification();
        history.push("/login");
        toast.info(
          "You have succefully created an account, an email verification link was sent to you inbox!",
          {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        history.push("/login");
      })

      .catch((err) => {
        console.log(err);
        const message = err.message;
        toast.error(message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setRegistering(false);
      });
  };
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box position={"absolute"} right={0} top={20}>
        <ToastContainer />
      </Box>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>Create your account</Heading>
        <Box minW={{ base: "90%", md: "490px" }}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="lg"
          >
            <FormControl id="Email" isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none" />
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="email address"
                />
              </InputGroup>
            </FormControl>
            <FormControl id="Password" isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" />
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="password"
                />
              </InputGroup>
            </FormControl>
            <FormControl id="Confirm Password" isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" />
                <Input
                  onChange={(e) => setConfirmPassoword(e.target.value)}
                  value={confirmPassoword}
                  type="password"
                  placeholder="confirm password"
                />
              </InputGroup>
            </FormControl>
            <Button
              borderRadius={4}
              disabled={registering}
              type="submit"
              variant="solid"
              onClick={createAccount}
              colorScheme="twitter"
              width="full"
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Box>
        Already have an account? {""}
        <Link color="blue.500">Login</Link>
      </Box>
    </Flex>
  );
};
export default RegisterComponent;
