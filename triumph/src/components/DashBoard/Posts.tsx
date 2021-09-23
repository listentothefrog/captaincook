import { Box, Flex, Text } from "@chakra-ui/layout";
import { Post } from "src/interfaces/post";
import { BsHeart } from "react-icons/bs";
import { IoGitCompareSharp } from "react-icons/io5";

const Posts = (props: Post) => {
  const { textValue, author, likes } = props;
  return (
    <Box
      display={"flex"}
      height={"150px"}
      flexDirection={"column"}
      m={4}
      justifyContent={"center"}
      rounded={"lg"}
      shadow={"lg"}
      alignItems={"center"}
    >
      <Box width={{ base: "80%", lg: "90%" }} height={"100%"} display={"flex"}>
        <Box display={"flex"} width={"100%"} alignItems={"center"} flex={1}>
          <Flex flexDir={"column"}>
            <Flex mt={2} ml={4}>
              <Text
                fontFamily={"heading"}
                fontSize={{ base: "xs", lg: "medium" }}
              >
                {textValue}
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Text fontSize="12px" color="gray.400" mt={2} mr={2}>
            Created by @{author}
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        m={2}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Box mr={2} cursor={"pointer"}>
            <BsHeart />
          </Box>
          {likes}
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Box mr={2} cursor={"pointer"}>
            <IoGitCompareSharp />
          </Box>
          {likes}
        </Box>
      </Box>
    </Box>
  );
};

export default Posts;
