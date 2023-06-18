import React, { useState } from "react";
import Axios from "axios";
import styled from 'styled-components';
import {Header,AppNameComponent,AppIcon,SearchComponent,SearchInput} from './components/headerComponent';
import {RecipeListContainer,RecipeContainer, CoverImage,RecipeName,IngredientsText,SeeMoreText} from './components/recipeComponent';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';


const APP_ID = "ed53fc34";
const APP_KEY = "944bea5788196046a75685e5e4b6b409	";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  `;

  const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

const button = styled.div`
padding:10px;
color:#ebc300;
`;

// const SeeNewTab = styled(SeeMoreText)`
//   color: green;
//   border: solid 1px green;
// `;
const RecipeComponent = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const {recipeObj} = props;

  return(
  <>
    <Dialog open = {show}>
    <DialogTitle>Ingredients</DialogTitle>
    <DialogContent>
      <table>
        <thead>
          <th>Ingredients</th>
          <th>Weight</th>
        </thead>
        <tbody>
          {recipeObj.ingredients.map((IngredientObj) => 
          <tr>
            <td>{IngredientObj.text}</td>
            <td>{IngredientObj.weight}</td>
        </tr>
        )}
    
        </tbody>
      </table>
      <DialogActions>
          <button onClick={handleClose}>Close</button>
        </DialogActions>
    </DialogContent>
    </Dialog>
    <RecipeContainer>
      <CoverImage src={recipeObj.image} />
      <RecipeName>{recipeObj.label}</RecipeName>
      <IngredientsText onClick={() => setShow(true)}>Ingredients</IngredientsText>
      <SeeMoreText onClick={() => window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>
    </RecipeContainer>
  </>
  );
}

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async(searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      console.log(response)
      updateRecipeList(response.data.hits);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(e.target.value),500);
    updateTimeoutId(timeout);
   
  };

  return (
    <>
    <Container>
      <Header>
        <AppNameComponent><AppIcon src="assets/hamburger.svg"/>Recipe Finder</AppNameComponent>
        <SearchComponent>
          <AppIcon src="assets/search-icon.svg" />
          <SearchInput placeholder="search the recipe here" onClick={onTextChange} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
       {recipeList.length > 0 ? ( recipeList.map((recipeObj) => (
        <RecipeComponent recipeObj = {recipeObj.recipe} />
         ))):(
          <Placeholder src="/assets/hamburger.svg" />
        )} 
      </RecipeListContainer>
    </Container>
    </>
  )
} 

export default App
