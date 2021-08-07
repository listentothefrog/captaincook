import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

const SearchComponent = () => {
  return (
    <Flex
      flexDirection="row"
      width="100wh"
      height="10vh"
      justifyContent="center"
      alignItems="center"
      alignContent={"center"}
    >
      <Flex flexDir="row" mb="2" justifyContent="center" alignItems="center">
        <Box width={"490px"}>
          <Flex spacing={4} p="1rem">
            <FormControl id="" isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none" />
                <Input type="" placeholder="Type something...." />
              </InputGroup>
            </FormControl>
          </Flex>
        </Box>
        <Button
          borderRadius={4}
          type="submit"
          variant="solid"
          backgroundColor={"green.400"}
          width="100px"
          color={"white"}
        >
          Search
        </Button>
      </Flex>
    </Flex>
  );
};

export default SearchComponent;
