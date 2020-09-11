import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = "736156ea";
  const APP_KEY = "aa11d56899bde42b3289b758c87c20ff";

  const [recipes, setRecipes] = useState([]);

  useEffect( async () => {
      getRecipes();
    }, []);

    const getRecipes = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }

  return (
    <div className='App'>
      <form className='search-form'>
        <input type='text' className='search-bar'/>
        <button type='submit' className='search-button'>Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}/>
      ))}
    </div>
  );
}
export default App;
