import { Box, Button, Heading, useColorMode } from "@chakra-ui/react";

const Appearance = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box mt={4} width={"70vh"}>
      <Box>
        <Heading fontSize={"xl"}>Theme</Heading>
      </Box>

      <Button mt={4} width={"100%"} onClick={toggleColorMode}>
        Dream (Dark) {colorMode === "dark"}
      </Button>
      <Button width={"100%"} mt={4} onClick={toggleColorMode}>
        Flashbang (Light){colorMode === "light"}
      </Button>
    </Box>
  );
};

export default Appearance;
