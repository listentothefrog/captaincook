import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <Box mt={2}>
      <Flex
        width={"100%"}
        height={"5vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex flexDirection={"column"}>
          <Flex>
            <Box mr={5}>
              <NavLink
                to="/dashboard/search"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#48BB78",
                }}
              >
                Search Recipes
              </NavLink>
            </Box>
            <Box mr={5}>Cook Book</Box>
            <Box>
              <NavLink
                to="/dashboard/discussions"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#48BB78",
                }}
              >
                Discussions
              </NavLink>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashboardHeader;
