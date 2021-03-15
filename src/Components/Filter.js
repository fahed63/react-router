import StarRatingComponent from "react-star-rating-component";
import { useState } from "react";
import "../filter.css";
const SearchBox = ({ keyRate, setKeyRate, search }) => {
  //const [searchText, setSearchText] = useState("");

  return (
    <div className="col col-sm-4">
      <input
style={{ borderRadius: 30 }}
        className="form-control"
        onChange={(e) => {
          search(e.target.value);
        }}
        placeholder="Type to search..."
      ></input>
      <StarRatingComponent
        name="rate"
        starCount={5}
        editing={true}
        value={keyRate}
        onStarClick={(nextValue) => {
          setKeyRate(nextValue);
        }}
      />
    </div>
  );
};

export default SearchBox;