import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Image1 from "../../../assets/img/avatar.jpg";

const Intro = () => {
  const [intro, setIntro] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const introRef = ref(db, "intro");
    onValue(introRef, (snapshot) => {
      const data = snapshot.val();
      setIntro(data);
    });
  }, []);
  return (
    <section className="cv-block block-intro border-bottom">
      <div className="container">
        <div className="avatar">
          <img
            className="img-fluid rounded-circle"
            src={`data:image/jpg;base64,${intro.image}`}
          />
        </div>
        <p>{intro.aboutme}</p>
        <a href="#" className="btn btn-outline-success">
          {intro.button}
        </a>
      </div>
    </section>
  );
};

export default Intro;
