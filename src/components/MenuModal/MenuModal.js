import React from "react";
import ReactDOM from "react-dom";
import { Backdrop, Overlay, Menu, Item } from "./MenuModalElements";

const Drop = (props) => {
  return <Backdrop onClick={props.onToggle}></Backdrop>;
};

const MenuModal = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Drop onToggle={props.onToggle} />
          <Overlay>
            <Menu>
              <Item>home</Item>
              <Item>about</Item>
              <Item>contact</Item>
              <Item>blog</Item>
              <Item>careers</Item>
            </Menu>
          </Overlay>
        </>,
        portalElement
      )}
    </>
  );
};

export default MenuModal;
