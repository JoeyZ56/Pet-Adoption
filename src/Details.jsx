import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">꩜</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <p>{pet.description}</p>
        <button>Adopt {pet.name}</button>
      </div>
    </div>
  );
};

//how to use ErrorBoundary
function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary
      errorComponent={
        <h2>
          This listing has an error. <Link to="/">Click here</Link> to go back
          to the home page.
        </h2>
      }
    >
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;

//useParams() is a hook that returns an object of key/value pairs of URL parameters.
//comes from the BroswerRouter component
//useParams does not work without BrowserRouter
