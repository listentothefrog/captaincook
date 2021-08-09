import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
const RecipesCardComponent = React.lazy(() => import("./RecipesCard"));

const SearchComponent = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=Panner&app_id=8232891e&app_key=9dad9dd4911a07651dea427243c50b52`
    );
    const data = await response.data;
    setRecipes(data.hits);
    console.log(data.hits);
  };
  return (
    <Box>
      <Flex
        flexDirection="row"
        width="100wh"
        height="10vh"
        justifyContent="center"
        alignItems="center"
        alignContent={"center"}
      >
        <Flex flexDir="row" mb="2" justifyContent="center" alignItems="center">
          <Box width={"490px"}>
            <Flex spacing={4} p="1rem">
              <FormControl id="" isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input type="" placeholder="Type something...." />
                </InputGroup>
              </FormControl>
            </Flex>
          </Box>
          <Button
            borderRadius={4}
            type="submit"
            variant="solid"
            backgroundColor={"green.400"}
            width="100px"
            color={"white"}
          >
            Search
          </Button>
        </Flex>
      </Flex>
      {!null ? (
        <Suspense
          fallback={
            <Spinner
              thickness="3px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#6c9e4f"
              size="md"
            />
          }
        >
          {recipes.map((recipe: any) => (
            <RecipesCardComponent
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              source={recipe.recipe.source}
              url={recipe.recipe.url}
              ingredient={recipe.recipe.ingredientLines}
            />
          ))}
        </Suspense>
      ) : (
        "Type something and all of the results will introduce themselves."
      )}
    </Box>
  );
};

export default SearchComponent;
