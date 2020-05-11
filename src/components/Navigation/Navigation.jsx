import React from "react";

import Button from "../Button";

import "./Navigation.scss";

const Navigation = ({ navigationItems, selectedItemKey, handleItemClick }) => {
    return (
      <nav className="nav">
        <ul className="nav-list">
          {navigationItems.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <Button active={selectedItemKey === item.key} onClick={() => handleItemClick(item.key)}>
                  {item.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

export default Navigation;
