import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="search" placeholder="Enter a city" autoComplete="off" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
