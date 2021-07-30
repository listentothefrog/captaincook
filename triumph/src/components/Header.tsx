import { Box, Flex } from "@chakra-ui/react";
import logo from "../images/logo-web.svg";

const HeaderComponent = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      background={"tan"}
      alignContent={"center"}
    >
      <Box marginTop={"2"} marginLeft={"4"}>
        <img src={logo} className="cursor-pointer" alt="logo" />
      </Box>
      <Box className="flex items-center justify-end w-92 mr-10">
        <Flex
          margin={"2"}
          width={"full"}
          alignItems="center"
          className="flex w-full items-center"
        >
          <Box
            marginRight={"2"}
            cursor={"pointer"}
            fontWeight={"medium"}
            className="mr-10 cursor-pointer hover:underline mt-2 font-normal"
            fontFamily={"body"}
          >
            Login
          </Box>
          <Box
            margin={"2"}
            fontWeight={"medium"}
            fontFamily={"body"}
            className="mr-10 cursor-pointer hover:underline mt-2 font-normal"
          >
            Register
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeaderComponent;
