import React from "react";
import CardDesk from "../components/CardDesk";
import { useParams } from "react-router-dom";

export default function ClothingItemsScreen() {
  const { type } = useParams();
  console.log(type)
  return (
    <div>
      <CardDesk />
      <h1>{type}</h1>
    </div>
  );
}
