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
  Link,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "src/firebase/firebase";
import "react-toastify/dist/ReactToastify.css";

const LoginComponent = () => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const history = useHistory();

  const signIntoAccount = async () => {
    if (error !== "") setError("");
    setAuthenticating(true);

    await auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        toast.info("Successful login!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.push("/dashboard");
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
        setAuthenticating(false);
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
        <Heading>Login into your account</Heading>
        <Box minW={{ base: "90%", md: "490px" }}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="lg"
          >
            <FormControl id="Email" isRequired>
              <FormLabel>Email</FormLabel>
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
              <FormLabel>Password</FormLabel>
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
            <Button
              borderRadius={4}
              disabled={authenticating}
              type="submit"
              variant="solid"
              onClick={signIntoAccount}
              backgroundColor={"#6c9e4f"}
              width="full"
              color={"white"}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Box>
        Don't have an account? {""}
        <Link color={"#6c9e4f"}>Click here to create one!</Link>
      </Box>
    </Flex>
  );
};
export default LoginComponent;
