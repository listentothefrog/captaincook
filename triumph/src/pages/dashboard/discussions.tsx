import { Box } from "@chakra-ui/layout";
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import DashboardHeader from "src/components/DashBoard/DashboardHeader/DashboardHeader";
import HeaderComponent from "src/components/Header";
import search from "./search";

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
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input type="string" placeholder="Create a Post" />
                </InputGroup>
              </FormControl>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default discussions;
