import { Box, Flex } from "@chakra-ui/react";
import { FcCalendar, FcSearch, FcTodoList } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const MobileDashboardComponent = () => {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      alignItems={"flex-end"}
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
              <FcSearch size={"22px"} />
            </NavLink>
          </Box>
          <Box mr={5}>
            <FcTodoList size={"22px"} />
          </Box>
          <Box>
            <NavLink
              to="/dashboard/organise"
              activeStyle={{
                fontWeight: "bold",
                color: "#48BB78",
              }}
            >
              <FcCalendar size={"22px"} />
            </NavLink>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MobileDashboardComponent;
