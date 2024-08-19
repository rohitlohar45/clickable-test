import React from 'react';
import './ClickableList.css';

const ClickableList = ({ items }) => {
  return (
    <ul className="clickable-list">
      {items.map((item) => (
        <li key={item.id} id={`clickable-item-${item.id}`}>
          <button 
            id={`button-${item.id}`} 
            data-testid={`button-${item.id}`} 
            onClick={() => console.log(`Clicked ${item.name}`)}
            className="clickable-button"
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ClickableList;
