import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Appearance = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box mt={4} width={"70vh"}>
      <Box>
        <Heading fontSize={"xl"}>Theme</Heading>
      </Box>
      <Button width={"100%"} mt={2} height={"8vh"}>
        <Flex
          flexDirection={"column"}
          textAlign={"left"}
          width={"100%"}
          mt={4}
          onClick={toggleColorMode}
        >
          Dream (Dark) {colorMode === "dark"}
          <Text color={"gray.600"} mt={2}>
            Follow the light and open your eyes to Dark Mode.
          </Text>
        </Flex>
      </Button>
      <Button width={"100%"} mt={4} height={"8vh"}>
        <Flex
          flexDirection={"column"}
          textAlign={"left"}
          width={"100%"}
          mt={4}
          onClick={toggleColorMode}
        >
          Flashbang (Light){colorMode === "light"}
          <Text color={"gray.600"} mt={2}>
            Think before you click this button your eyes may burn.
          </Text>
        </Flex>
      </Button>
    </Box>
  );
};

export default Appearance;
