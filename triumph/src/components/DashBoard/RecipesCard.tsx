import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import React from "react";
import IRecipeProps from "src/interfaces/recipe";

const RecipesCardComponent: React.FC<IRecipeProps> = (props) => {
  const { title, image, source, ingredients, calories, url, shareAs } = props;
  const { hasCopied, onCopy } = useClipboard(shareAs);

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
            <Link href={url}>
              <Heading ml={"5"} fontSize="xl">
                {title}
              </Heading>
            </Link>
          </Flex>
          <Flex mt={2}>
            <Text color={"#707070"}>{source}</Text>
          </Flex>
        </Flex>
        <Flex flexDir={"row"}>
          <Box flex={1} mt={4}>
            {ingredients.map((ingredient: any) => (
              <Box key={"label" + ingredient.text}>{ingredient.text}</Box>
            ))}
          </Box>
        </Flex>
      </Box>
      <Flex position={"absolute"} right={30}>
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
        <Button
          background={"green.400"}
          color={"white"}
          onClick={onCopy}
          ml={2}
        >
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default RecipesCardComponent;
