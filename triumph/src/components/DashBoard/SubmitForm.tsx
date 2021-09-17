import { Flex, Textarea, Box, Input, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, firestore } from "src/firebase/firebase";

const SubmitForm = () => {
  const [user] = useAuthState(auth);

  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const postsRef = firestore.collection("discussions");

  const addPosts = async (e: React.FormEvent) => {
    e.preventDefault();

    const date = new Date();
    const email = user?.email;
    const name = email?.substring(0, email.indexOf("@"));

    await postsRef.add({
      titleValue,
      textValue,
      createdAt: date.toUTCString(),
      updatedAt: date.toUTCString(),
      author: name,
      upVotes: 0,
      downVotes: 0,
    });

    setTitleValue("");
    setTextValue("");
  };

  return (
    <Flex
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        width={{ base: "300px", md: "400px", lg: "620px" }}
        background={"#fafafa"}
        borderRadius={"lg"}
      >
        <Box mt={4} width={"100%"}>
          <Heading ml={4} fontSize={"xl"}>
            Create a Post
          </Heading>
          <Box
            width={"full"}
            p={1}
            border={1}
            borderBottom={"1px"}
            opacity={".5"}
            mt={2}
          ></Box>
        </Box>
        <Box m={4}>
          <Input
            onChange={(e) => setTitleValue(e.target.value)}
            value={titleValue}
            placeholder={"Title"}
            borderRadius={"lg"}
          />
          <Textarea
            mt={5}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            borderRadius={"lg"}
            placeholder="What is on your mind?"
            size="sm"
          />
          <Box mt={4} display={"flex"} justifyContent={"flex-end"}>
            <Link to="/dashboard/discussions">
              <Button
                borderRadius={4}
                type="submit"
                variant="solid"
                width="70px"
                mr={2}
                color={"black"}
              >
                Cancel
              </Button>
            </Link>
            <Button
              borderRadius={4}
              type="submit"
              variant="solid"
              backgroundColor={"green.400"}
              width="70px"
              isDisabled={textValue.length <= 5}
              onClick={addPosts}
              color={"white"}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SubmitForm;
