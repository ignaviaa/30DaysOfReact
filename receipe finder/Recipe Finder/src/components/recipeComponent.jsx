import styled from 'styled-components';

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction:row;
  padding:30px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-bottom: 50px;
  gap:25px;
  
`;

export const RecipeContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding: 10px;
   box-shadow: 0 3px 10px 0 #aaa;
   width:300px;
   border-radius: 5px;
  
`;

export const CoverImage = styled.img`
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

export const IngredientsText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  margin: 10px 0;
  padding:5px;
  border-radius:4px;
  cursor: pointer;
  color: green;
  text-align:center;
`;

export const SeeMoreText = styled(IngredientsText)`
color: #eb3300;
border: solid 1px #eb3300;

`;