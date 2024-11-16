import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Info = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const infoRef = ref(db, "info");
    onValue(infoRef, (snapshot) => {
      const data = snapshot.val();
      setInfo(data);
    });
  }, []);
  return (
    <section className="cv-block info">
      <div className="container">
        <div className="work-experience group" id="portofolio">
          <h2 className="text-center">{info.portofolio}</h2>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>{info.web1}</h3>
                <h4 className="organization">{info.web1jdl}</h4>
              </div>
              <div className="col-md-6">
                <time className="period">{info.web1jdl}</time>
              </div>
            </div>
            <p className="text-muted">{info.web1deskripsi}</p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>{info.web2}</h3>
                <h4 className="organization">{info.web2jdl}</h4>
              </div>
              <div className="col-md-6">
                <time className="period">{info.web2thn}</time>
              </div>
            </div>
            <p className="text-muted">{info.web2deskripsi}</p>
          </div>
        </div>
        <div className="education group" id="education">
          <h2 className="text-center">{info.education}</h2>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>{info.edu1}</h3>
                <h4 className="organization">{info.edu1jdl}</h4>
              </div>
              <div className="col-md-6">
                <time className="period">{info.edu1thn}</time>
              </div>
            </div>
            <p className="text-muted">{info.edu1deskripsi}</p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>{info.edu2}</h3>
                <h4 className="organization">{info.edu2jdl}</h4>
              </div>
              <div className="col-md-6">
                <time className="period">{info.edu2thn}</time>
              </div>
            </div>
            <p className="text-muted">{info.edu2deskripsi}</p>
          </div>
        </div>
        <div className="group" id="skills">
          <div className="row">
            <div className="col-md-6">
              <div className="skills info-card">
                <h2>{info.skil}</h2>
                <h3>{info.skil1}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <h3>{info.Skil2}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <h3>{info.skil3}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info info-card">
                <h2>{info.contact}</h2>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-android-calendar icon" />
                  </div>
                  <div className="col-9">
                    <span>{info.contactthn}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-person icon" />
                  </div>
                  <div className="col-9">
                    <span>{info.contactname}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-ios-telephone icon" />
                  </div>
                  <div className="col-9">
                    <span>{info.contactnum}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-at icon" />
                  </div>
                  <div className="col-9">
                    <span>{info.contactemail}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hobbies group" id="hobbies">
          <h2 className="text-center">{info.hoby}</h2>
          <p className="text-center text-muted">{info.hobydeskripsi}</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
