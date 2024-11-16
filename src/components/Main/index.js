import React from "react";
import Intro from "./Intro";
import Info from "./Info";

const Main = () => {
  return (
    <div>
      <main className="page cv-page">
        <Intro />
        <Info />
      </main>
    </div>
  );
};

export default Main;
