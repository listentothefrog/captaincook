import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Lost from "../images/lost.svg";

const pageNotFound = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      width={"100%"}
      height={"100vh"}
    >
      <Box width={"400px"} height={"300px"}>
        <Image width={"100%"} height={"100%"} src={Lost} alt={"404"} />
      </Box>
      <Box width={"600px"} textAlign={"center"}>
        <Text mt={2} fontWeight={"bold"}>
          You didn't break the internet, but we can't find what you are looking
          for.
        </Text>
      </Box>
      <Flex
        mt={5}
        alignContent={"center"}
        justifyContent={"center"}
        width={"600px"}
      >
        <Link to="/">
          <Button background={"green.400"} color={"white"}>
            Return to Home
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default pageNotFound;
