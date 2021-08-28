import { Center, Flex, Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";

const SpinnerComponent = () => {
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
        <Heading size={"16px"}>Loading...</Heading>
      </Flex>
    </Center>
  );
};

export default SpinnerComponent;
