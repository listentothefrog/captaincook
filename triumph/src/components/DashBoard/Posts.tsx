import { Box, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";

const Posts = () => {
  const [vote, setVote] = useState(false);
  const handleClick = () => setVote(vote);
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
            0
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
              title
            </Heading>
          </Flex>
          <Flex mt={2} ml={4}>
            <Text color={"#707070"}>description</Text>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Text fontSize="12px" color="gray.400">
          Created at ... by ....
        </Text>
      </Box>
    </Flex>
  );
};

export default Posts;
