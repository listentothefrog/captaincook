import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../images/logo-web.svg";
import { auth } from "src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const HeaderComponent = () => {
  const [user] = useAuthState(auth);
  return (
    <Flex
      justifyContent={"space-evenly"}
      boxShadow="lg"
      border={2}
      width={"100%"}
      borderBottom={"1px"}
      alignContent={"center"}
    >
      <Box marginTop={"2"} marginLeft={"4"}>
        <img src={logo} className="cursor-pointer" alt="logo" />
      </Box>
      <Box>
        <Flex margin={"2"} width={"full"} alignItems="center">
          <Box marginRight={"2"} fontWeight={"medium"} fontFamily={"body"}>
            {user ? (
              <Link to="/dashboard">Dashboard</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </Box>
          <Box margin={"2"} fontWeight={"medium"} fontFamily={"body"}>
            {user ? (
              auth.currentUser?.email
            ) : (
              <Link to="/register">Register</Link>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeaderComponent;
