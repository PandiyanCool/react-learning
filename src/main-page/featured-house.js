import House from "../house";

const FeaturedHouse = ({ house }) => {
  if (house) {
    return (
      <div className="container">
        <div className="row featureHouse">
          <h3 className="col-md-12 text-center">Featured house</h3>
        </div>
        <House house={house} />
      </div>
    );
  }
  return <div>No featured house</div>;
};

export default FeaturedHouse;
