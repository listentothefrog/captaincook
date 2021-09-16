import { Box } from "@chakra-ui/layout";
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "src/components/DashBoard/DashboardHeader/DashboardHeader";
import HeaderComponent from "src/components/Header";
import SpinnerComponent from "src/components/Spinner";
const Posts = React.lazy(() => import("src/components/DashBoard/Posts"));

const discussions = () => {
  return (
    <Box>
      <HeaderComponent />
      <DashboardHeader />
      <Box>
        <Flex flexDir="row" mb="2" justifyContent="center" alignItems="center">
          <Box width={"490px"}>
            <Flex spacing={4} p="1rem">
              <FormControl id="Post" isRequired>
                <Link to="/submit">
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" />
                    <Input
                      isReadOnly
                      type="string"
                      placeholder="Create a Post"
                    />
                  </InputGroup>
                </Link>
              </FormControl>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Suspense fallback={<SpinnerComponent message={"Loading posts..."} />}>
        <Posts />
      </Suspense>
    </Box>
  );
};

export default discussions;
