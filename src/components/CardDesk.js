import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { fetchItemsByType } from "./shopSlice";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function CardDesk(props) {
  let { type } = useParams();
  let [item, setItem] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(dispatch(fetchItemsByType(type)));
  }, []);
  console.log(item.length);
  const rows = [];
  for (let i = 0; i < item.length; i++) {
    rows.push(
      <div className="col" key={i}>
        {" "}
        <Card key={i} />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="row row-cols-2 row-cols-md-3 g-4">{rows}</div>
    </div>
  );
}
