import { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";

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

  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses} />
      </div>
      <Routes>
        <Route
          path="/house/:id"
          element={<HouseFromQuery allHouses={allHouses}></HouseFromQuery>}
        ></Route>
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
