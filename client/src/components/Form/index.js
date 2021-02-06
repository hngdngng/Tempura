import React from "react";
import "./style.css";

function Form({ query, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <input
          className="form-control"
          id="City"
          type="text"
          value={query}
          placeholder="Find a City"
          name="query"
          onChange={handleInputChange}
          required
        />
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn"
          id="search-btn"
        >
          Search
        </button>
      </div>
      <div>
        
      </div>
    </form>
  );
}

export default Form;
