import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { Post } from "src/interfaces/post";

const Posts = (props: Post) => {
  const { titleValue, textValue, upVotes, author, createdAt } = props;
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
      <Box mr={2}>
        <Box display={"flex"} flexDir={"column"}>
          <Box cursor={"pointer"}>
            <BiUpvote />
          </Box>
          <Box
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
          >
            {upVotes}
          </Box>
          <Box cursor={"pointer"}>
            <BiDownvote />
          </Box>
        </Box>
      </Box>
      <Box flex={1}>
        <Flex flexDir={"column"}>
          <Flex alignItems={"center"}>
            <Heading ml={"5"} fontSize="xl">
              {titleValue}
            </Heading>
          </Flex>
          <Flex mt={2} ml={4}>
            <Text color={"#707070"}>{textValue}</Text>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Text fontSize="12px" color="gray.400">
          Created at {createdAt} by {author}
        </Text>
      </Box>
    </Flex>
  );
};

export default Posts;
