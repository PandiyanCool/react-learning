import { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from '../search-results'

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
    <BrowserRouter>
      <div className="container">
        <Header appName="Providing houses all over the world" />
      </div>
      <Routes>
        <Route
        path="/searchresults/:country"
        element={<SearchResults allHouses={allHouses}></SearchResults>}
        ></Route>
        <Route
          path="/"
          element={<FeaturedHouse house={featuredHouse}></FeaturedHouse>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
