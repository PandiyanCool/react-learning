import { useEffect, useState, useMemo } from "react";
import "./main-page.css";
import Header from "./header";
import Carousel from "./carousel";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHousesData = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHousesData();
  }, []);

  // setting a random item as featured item and using useMemo to memoise the actvity
  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomHouseIndex = Math.floor(Math.random() * allHouses.length);

      return allHouses[randomHouseIndex];
    }
  }, [allHouses]);

  console.log(featuredHouse);

  return (
    <div className="container">
      <Header appName="Bootstrap in 30" />
      <Carousel />
    </div>
  );
}

export default App;
