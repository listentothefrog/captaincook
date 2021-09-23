import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React, { Suspense } from "react";
import DashboardHeader from "src/components/DashBoard/DashboardHeader/DashboardHeader";
import HeaderComponent from "src/components/Header";
import SpinnerComponent from "src/components/Spinner";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "src/firebase/firebase";
import { Post } from "src/interfaces/post";
import SubmitForm from "src/components/DashBoard/SubmitForm";
const Posts = React.lazy(() => import("src/components/DashBoard/Posts"));

const Discussions = () => {
  const postsRef = firestore.collection("discussions");
  const query = postsRef.orderBy("createdAt").limit(20);
  const [posts]: [Post[] | undefined, boolean, Error | undefined] =
    useCollectionData<Post>(query, { idField: "id" });
  return (
    <Box>
      <HeaderComponent />
      <DashboardHeader />
      <Box>
        <Flex flexDir="row" mb="2" justifyContent="center" alignItems="center">
          <SubmitForm />
        </Flex>
      </Box>
      <Box mt={"10"}>
        <Suspense
          fallback={<SpinnerComponent message={"Fetching new posts..."} />}
        >
          {posts &&
            posts.map((post) => (
              <Posts
                key={post.id}
                id={post.id}
                textValue={post.textValue}
                author={post.author}
                createdAt={post.createdAt}
                likes={post.likes}
              />
            ))}
        </Suspense>
      </Box>
    </Box>
  );
};

export default Discussions;
