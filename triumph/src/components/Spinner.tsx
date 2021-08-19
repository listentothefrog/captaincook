import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";

const SpinnerComponent = () => {
  return (
    <Center>
      <Spinner
        thickness="3px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#48BB78"
        size="md"
      />
    </Center>
  );
};

export default SpinnerComponent;
