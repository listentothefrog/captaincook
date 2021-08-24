import { Box, Flex, useDisclosure, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../images/logo-web.svg";
import { auth } from "src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const HeaderComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const [user] = useAuthState(auth);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      borderBottom={"2px"}
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <img
            src={logo}
            className="cursor-pointer"
            alt="logo"
            width={"100%"}
            height={"100%"}
          />
        </Link>
      </Flex>

      <Box
        cursor={"pointer"}
        display={{ base: "block", md: "none" }}
        onClick={handleToggle}
      >
        {!isOpen ? <HamburgerIcon /> : <CloseIcon />}
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: 4, md: 0 }}
        mr={2}
      >
        <Text>
          {user ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : (
            <Link to="/register">Register</Link>
          )}
        </Text>
        <Text mr={4}>{user ? "" : <Link to="/login">Login</Link>}</Text>
        <Text mr={4}>Contact</Text>
        <Text mr={4}>Change Log</Text>
        <Text>{user ? <Link to="/settings">Account Settings</Link> : ""}</Text>
      </Stack>
    </Flex>
  );
};

export default HeaderComponent;
