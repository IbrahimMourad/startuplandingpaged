import React, { useState } from "react";
import { jsx } from "theme-ui";

import { FaArrowUp } from "react-icons/fa";
/** @jsx jsx */

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      sx={styles.scrollTop}
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
    >
      <FaArrowUp />
    </div>
  );
}

const styles = {
  scrollTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ea3a60",
    color: "white",
    position: "fixed",
    right: "15px",
    bottom: "15px",
    zIndex: 9999,
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    overflow: "hidden",
    transition: "all ease-in-out 0.25s",
    "&:hover": {
      cursor: "pointer",
      boxShadow: " rgb(233 76 84 / 57%) 0px 9px 20px -5px",
    },
    "& svg": {
      transition: "transform ease-in-out 0.25s",
    },
    "&:hover svg": {
      width: "40px",
      transform: "translateY(-5px)",
      textShadow: "1px 2px 4px rgba(234,58,96,0.56)",
    },
  },
};
