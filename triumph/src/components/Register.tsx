import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { auth } from "src/firebase/firebase";

const RegisterComponent = () => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [error, setError] = useState<string>("");
  const history = useHistory();
  const { addToast } = useToasts();

  const createAccount = async () => {
    if (error !== "") setError("");
    setRegistering(true);

    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        history.push("/dashboard");
      })

      .catch((err) => {
        console.log(err);
        const message = err.message;
        addToast(message, {
          appearance: "warning",
          autoDismiss: true,
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
                <InputRightElement width="4.5rem">
                  <Button
                    backgroundColor={"transparent"}
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              borderRadius={4}
              disabled={registering}
              type="submit"
              variant="solid"
              onClick={createAccount}
              backgroundColor={"green.400"}
              color={"white"}
              width="full"
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Box>
        Already have an account? {""}
        <Link to="/login" style={{ color: "#48BB78" }}>
          Login
        </Link>
      </Box>
    </Flex>
  );
};
export default RegisterComponent;
