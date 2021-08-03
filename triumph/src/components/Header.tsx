import { Box, Flex } from "@chakra-ui/react";
import logo from "../images/logo-web.svg";

const HeaderComponent = () => {
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
          <Box
            marginRight={"2"}
            cursor={"pointer"}
            fontWeight={"medium"}
            fontFamily={"body"}
          >
            Login
          </Box>
          <Box
            margin={"2"}
            cursor={"pointer"}
            fontWeight={"medium"}
            fontFamily={"body"}
          >
            Register
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeaderComponent;
