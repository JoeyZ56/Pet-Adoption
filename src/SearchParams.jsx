import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          value={location}
          placeholder="Search Locations"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
