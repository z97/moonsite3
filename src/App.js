import { Link } from "react-router-dom";
import NumberOfSavedSets from "./components/home/NumberOfSavedSets";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Table from "./components/home/Table";
export default function App() {
  return (
    <div>
      <Navbar />
      <h2>Home</h2>
      <NumberOfSavedSets/>
      <Table/>
    </div>
  );
}
