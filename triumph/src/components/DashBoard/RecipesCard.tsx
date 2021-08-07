import { CopyIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const RecipesCardComponent = () => (
  <Flex mr={5} ml={5} mt={4} p={5} rounded={"lg"} shadow="lg" borderWidth="1px">
    <Box flex={1}>
      <Flex flexDir={"column"} alignContent={"center"}>
        <Flex alignItems={"center"}>
          <Image
            src={
              "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1222&q=80"
            }
            borderRadius={"25px"}
            objectFit={"cover"}
            width={"40px"}
            height={"40px"}
            alt={"image"}
          />
          <Link>
            <Heading ml={"5"} fontSize="xl">
              title
            </Heading>
          </Link>
        </Flex>
        <Flex mt={2}>
          <Text color={"#707070"}>posted by </Text>
        </Flex>
      </Flex>
      <Flex align="center">
        <Text flex={1} mt={4}>
          ingredients
        </Text>
      </Flex>
    </Box>
    <Flex alignItems={"flex-start"}>
      <Text
        background={"green.400"}
        pt={1.5}
        pr={1.5}
        pl={1.5}
        pb={1.5}
        borderRadius={"full"}
        color={"white"}
      >
        calories
      </Text>
    </Flex>
    <Flex alignItems={"flex-end"}>
      <CopyIcon />
    </Flex>
  </Flex>
);

export default RecipesCardComponent;
