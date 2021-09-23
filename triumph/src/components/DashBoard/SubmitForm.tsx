import { Flex, Textarea, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "src/firebase/firebase";
import { useToasts } from "react-toast-notifications";

const SubmitForm = () => {
  const [user] = useAuthState(auth);
  const { addToast } = useToasts();

  const [textValue, setTextValue] = useState("");

  const postsRef = firestore.collection("discussions");

  const addPosts = async (e: React.FormEvent) => {
    const date = new Date();
    const email = user?.email;
    // fetch charecters before @
    const name = email?.substring(0, email.indexOf("@"));

    try {
      await postsRef.add({
        textValue,
        likes: 0,
        author: name,
        upVotes: 0,
        downVotes: 0,
      });
      setTextValue("");
    } catch (err: any) {
      addToast(err.message, {
        appearance: "warning",
        autoDismiss: true,
      });
    }
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
        <Box ml={4} mr={4}>
          <Textarea
            mt={5}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            borderRadius={"lg"}
            placeholder="What is on your mind?"
            size="sm"
          />
          <Box mt={4} mb={2} display={"flex"} justifyContent={"flex-end"}>
            <Button
              borderRadius={4}
              type="submit"
              variant="solid"
              backgroundColor={"green.400"}
              width="70px"
              isDisabled={textValue.length > 255}
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
