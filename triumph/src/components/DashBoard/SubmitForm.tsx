import { Flex, Textarea, Box, Input, Button, Heading } from "@chakra-ui/react";
import firebase from "firebase/app";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import { auth, firestore } from "src/firebase/firebase";
import { Post } from "src/interfaces/post";

const SubmitForm = () => {
  const [user] = useAuthState(auth);

  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const postsRef = firestore.collection("discussions");
  const query = postsRef.orderBy("createdAt").limit(20);
  const [posts]: [Post[] | undefined, boolean, Error | undefined] =
    useCollectionData<Post>(query, { idField: "id" });

  const addPosts = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = user?.email;
    const name = email?.substring(0, email.indexOf("@"));

    await postsRef.add({
      title: titleValue,
      text: textValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      author: name,
      upvotes: 0,
    });
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
