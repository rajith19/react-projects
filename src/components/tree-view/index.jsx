import MenuList from "./menu-list";
import './styles.css';
import React from "react";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
