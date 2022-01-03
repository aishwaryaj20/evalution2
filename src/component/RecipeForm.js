import React, { useState } from "react";

import "./Recipe.css";
export const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [saveData, setSaveData] = useState([]);
  const opendata = (e) => {
   // alert("{e.currdata.title}")
}
  const submitForm = (e) => {
    e.preventDefault();
    const newdata = {
      title: title,
      ingredients: ingredients,
      time: time,
      instructions: instructions,
    };

    setSaveData([...saveData, newdata]);
    console.log(saveData);
  };

  return (
    <>


      <form action="" onSubmit={submitForm}>
        <div className="leftbox">
          <label forhtml="name">Enter Recipe Title</label>
          <br></br>

          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <br></br>

          <label forhtml="ingredients">Enter Ingredients</label>
          <br></br>

          <input
            type="text"
            name="ingredients"
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
          />

          <br></br>

          <label forhtml="time" className="time">Enter Time</label>
          <br></br>

          <input
            type="number"
            name="time "
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />

          <br></br>

          <label forhtml="instructions ">Enter Instructions</label>
          <br></br>

          <input
            type="text"
            name="instructions "
            onChange={(e) => setInstructions(e.target.value)}
            value={instructions}
          />

          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div>
        {saveData.map((currdata) => {
          return (
            <div id="rightbox">
            <div className="box">
              <h1>Recipes</h1>
              <p class="show"> Recipe Title  : {currdata.title}</p>
              <p class="show"> Recipe Ingredients : {currdata.ingredients}</p>
              <p class="show"> Time Required : {currdata.time}</p>
              <p class="show"> Instructions : {currdata.instructions}</p>
       <br></br>
           <button  onClick={opendata} >View</button>
       
    </div>  
</div>
          );
        })
        
        }
      </div>

    </>
  );
};
export default RecipeForm;
