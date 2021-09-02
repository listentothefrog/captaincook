import { CheckIcon, AddIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  Image,
  useOutsideClick,
  Link,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

const FeedComponent = () => {
  const [food, setFood] = useState([]);

  const fetchFood = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setFood(data.meals);
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });

  return (
    <>
      {food.map((f) => {
        const { idMeal, strMeal, strInstructions, strMealThumb, strSource } = f;

        return (
          <div key={idMeal}>
            <Flex
              mr={5}
              ml={5}
              mt={4}
              p={5}
              rounded={"lg"}
              shadow="lg"
              borderWidth="1px"
            >
              <Box flex={1}>
                <Flex flexDir={"column"} alignContent={"center"}>
                  <Flex alignItems={"center"}>
                    <Image
                      src={strMealThumb}
                      borderRadius={"25px"}
                      objectFit={"cover"}
                      width={"40px"}
                      height={"40px"}
                      alt={"image"}
                    />
                    <Link href={strSource}>
                      <Heading ml={"5"} fontSize="xl">
                        {strMeal}
                      </Heading>
                    </Link>
                  </Flex>
                  <Flex mt={2}>
                    <Text color={"#707070"}>{strSource}</Text>
                  </Flex>
                </Flex>
                <Flex flexDir={"row"}>
                  <Box flex={1} mt={4}>
                    {strInstructions}
                  </Box>
                </Flex>
              </Box>
              <Flex alignItems={"flex-end"}>
                <Button background={"green.400"} color={"white"} ml={2}>
                  {isModalOpen ? (
                    <div ref={ref}>
                      <CheckIcon />
                    </div>
                  ) : (
                    <div onClick={() => setIsModalOpen(true)}>
                      <AddIcon />
                    </div>
                  )}
                </Button>
              </Flex>
            </Flex>
          </div>
        );
      })}
    </>
  );
};

export default FeedComponent;
