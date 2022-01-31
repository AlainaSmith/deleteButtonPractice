import React from "react";
import Bands from "./BandComponent";
import Data from "./Data";

const List = ({ list, onRemove }) => (
    <ul>
      {list.map((item) => (
        <Item key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
  
  const Item = ({ item, onRemove }) => (
    <li>
      <span>{item.firstname}</span>
      <span>{item.lastname}</span>
      <span>{item.year}</span>
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );