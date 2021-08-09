import { CopyIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import IRecipeProps from "src/interfaces/recipe";

const RecipesCardComponent: React.FC<IRecipeProps> = (props) => {
  const { title, image, source, ingredient, calories, url } = props;
  return (
    <Flex
      mr={5}
      ml={5}
      mt={4}
      p={5}
      rounded={"lg"}
      shadow="lg"
      borderWidth="1px"
    >
      <Box flex={1}>
        <Flex flexDir={"column"} alignContent={"center"}>
          <Flex alignItems={"center"}>
            <Image
              src={image}
              borderRadius={"25px"}
              objectFit={"cover"}
              width={"40px"}
              height={"40px"}
              alt={"image"}
            />
            <Link>
              <Heading ml={"5"} fontSize="xl">
                {title}
              </Heading>
            </Link>
          </Flex>
          <Flex mt={2}>
            <Text color={"#707070"}>{source}</Text>
          </Flex>
        </Flex>
        <Flex align="center">
          <Text flex={1} mt={4}>
            {ingredient}
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
          {Math.floor(calories)} calories
        </Text>
      </Flex>
      <Flex alignItems={"flex-end"}>
        <CopyIcon />
        {url}
      </Flex>
    </Flex>
  );
};

export default RecipesCardComponent;
