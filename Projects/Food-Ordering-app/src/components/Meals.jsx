import { useState, useEffect } from "react";
import MealItem from "./MealItem";
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
        {loadedMeals.map((meal) => (<MealItem key={meal.id} meal={meal} />))}
    </ul>
}