import { useState, useEffect } from "react";
export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);
    useEffect(() => {
        async function fetchMeals(){
        const response = await fetch('http://localhost:3000/meals');

        if(!response.ok){
            //do something
        }
        const meals = await response.json();
        setLoadedMeals(meals);
        }

    fetchMeals();
    },[]);//this empty dependencies will ensurer it is executed only once

    

    return <ul id="meals">
        {loadedMeals.map(meal => <li key={meal.id}>{meal.name}</li>)}
    </ul>
}