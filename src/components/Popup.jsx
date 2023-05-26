import React from "react";
import IMAGES from "../Images";
import "../styles/Popup.css";
export default function Popup(props) {
  const products = [
    {
      title: "Spense",
      description:
        "Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts.",
      icon: IMAGES.spenseIcon,
    },
    {
      title: "Fiber Landing Page",
      description:
        "An online portfolio generator. Great to practice flex/grid layouts, and absolute positioning.",
      icon: IMAGES.fiberIcon,
    },
    {
      title: "Gradie Sign Up Page",
      description:
        " Geadie is a simple sign up page, great to practice centering layouts.",
      icon: IMAGES.gradieIcon,
    },
  ];

  return props.trigger ? (
    <div className="productPopup">
      <div className="popupHeader">
        <h4>PRODUCTS</h4>
        <img
          src={IMAGES.closeIcon}
          alt=""
          className="close"
          onClick={() => props.setTrigger(false)}
        />
      </div>
      <ul className="listWrapper">
        {products.map((product, index) => (
          <li className="product-types">
            <img classname="product-logo" src={product.icon} alt="" />
            <div className="product-details">
              <h2 className="product-name">{product.title}</h2>
              <p className="product-description">{product.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    ""
  );
}
