import { useNavigate } from "react-router-dom";

const HouseFilter = ({ allHouses }) => {
  const history = useNavigate();
  
  const countries = allHouses
    ? Array.from(new Set(allHouses.map((x) => x.country)))
    : [];
  countries.unshift(null);

  console.log(countries);

  const onSearchChange = (e) => {
    const country = e.target.value;
    history.push(`/searchresults/${country}`);
  };

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country :)
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {countries.map((m) => {
            <option key={m} value={m}>
              {m}
            </option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
