import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Lost from "../images/lost.svg";

const PageNotFound = () => {
  const location = useLocation();
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      width={"100%"}
      height={"100vh"}
    >
      <Box width={"600px"} height={"500px"}>
        <Image width={"100%"} height={"100%"} src={Lost} alt={"404"} />
      </Box>
      <Box textAlign={"center"}>
        <Heading size={"lg"}>Can't find page {location.pathname}</Heading>
        <Text mt={2} fontWeight={"bold"} fontSize={"16px"}>
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
            Return to Home?
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default PageNotFound;
