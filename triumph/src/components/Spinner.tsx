import { Center, Flex, Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useLocation } from "react-router";

const SpinnerComponent = () => {
  const location = useLocation();
  return (
    <Center>
      <Flex
        width={"250px"}
        height={"150px"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Spinner
          thickness="3px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#48BB78"
          size="xl"
        />
        <Heading size={"16px"}>Loading {location.pathname} </Heading>
      </Flex>
    </Center>
  );
};

export default SpinnerComponent;
