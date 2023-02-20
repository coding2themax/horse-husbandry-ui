import React from "react";
import BreedList from "./breed_list";

const Breed = (props) =>{

  return (
    <>
      {props.breedList.map((breed) => (
      <BreedList breed={breed} key={breed.id}  />
    ))}
    </>
  )
}


export default Breed;