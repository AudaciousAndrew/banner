import React from "react";
import banner from "../assets/images/banner.jpg";
import "../styles/base.scss";

const App = () => {
  return (
    <main className="main">
      <a
        href="https://bst.tracktable.link/PkytbY"
        target={"_blank"}
        rel="noreferrer"
      >
        <img src={banner} alt="ad banner" width={800} height={575} />
      </a>
    </main>
  );
};

export default App;
