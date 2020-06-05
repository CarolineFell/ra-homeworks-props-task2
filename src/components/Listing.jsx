import React from "react";
import Item from "./Item";

const Listing = ({ items }) => {
  const getID = listing_id => { return listing_id};
  return (
    <div className="item-list">
      {items.map(item => (
        <Item item={item} key={getID(item.listing_id)} />
      ))}
    </div>
  );
};

Listing.defaultProps = {
  items: []
};

export default Listing;