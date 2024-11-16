import React from "react";

const Main = () => {
  return (
    <div>
      <main className="page cv-page">
        <section className="cv-block block-intro border-bottom">
          <div className="container">
            <div className="avatar">
              <img
                className="img-fluid rounded-circle"
                src="assets/img/avatar.jpg"
              />
            </div>
            <p>
              Hello! I am <strong>Jery Koupun</strong>.I am a student at the
              Faculty of Computer Science at Universitas Klabat, majoring in
              Information Systems. I have a strong interest in design and
              analysis.
            </p>
            <a href="#" className="btn btn-outline-success">
              Hire Me
            </a>
          </div>
        </section>
        <section className="cv-block info">
          <div className="container">
            <div className="work-experience group" id="portofolio">
              <h2 className="text-center">Portofolio</h2>
              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Web Klabat Set Up</h3>
                    <h4 className="organization">Klabat Set Up</h4>
                  </div>
                  <div className="col-md-6">
                    <time className="period">2024</time>
                  </div>
                </div>
                <p className="text-muted">
                  I created the Klabat Set Up website in 2024 to provide outdoor
                  enthusiasts with high-quality mountain hiking equipment and
                  apparel. The platform is designed to cater to adventurers by
                  offering a seamless shopping experience, detailed product
                  information, and a secure blockchain-based transaction system.
                </p>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Web Filkom Day</h3>
                    <h4 className="organization">Filkom Day.</h4>
                  </div>
                  <div className="col-md-6">
                    <time className="period">2023</time>
                  </div>
                </div>
                <p className="text-muted">
                  I created the Filkom Day website in 2023 to simplify the
                  registration process for Filkom Day and serve as a place where
                  Filkom students can view galleries and photos from the event.
                  The website is designed to allow students to easily access
                  event information, register online, and enjoy visual
                  documentation of the exciting moments from the event.
                </p>
              </div>
            </div>
            <div className="education group" id="education">
              <h2 className="text-center">Education</h2>
              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Vocational High School Graduate</h3>
                    <h4 className="organization">SMK Negeri 1 Wori</h4>
                  </div>
                  <div className="col-md-6">
                    <time className="period">2019 - 2022</time>
                  </div>
                </div>
                <p className="text-muted">
                  I completed my education at SMK Negeri 1 Wori, majoring in
                  Computer Engineering and Networking. During my studies, I
                  gained practical skills and in-depth knowledge in computer
                  systems, network installation, as well as hardware and
                  software maintenance. This education provided me with a solid
                  foundation to tackle challenges in the field of information
                  technology.
                </p>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Student of Information Systems</h3>
                    <h4 className="organization">Universitas Klabat</h4>
                  </div>
                  <div className="col-md-6">
                    <time className="period">2022-2026</time>
                  </div>
                </div>
                <p className="text-muted">
                  I'm currently pursuing my studies in Information Systems at
                  Universitas Klabat. This program allows me to develop a deep
                  understanding of system analysis, business process modeling,
                  and IT solutions. Throughout my education, I am gaining
                  valuable skills in both technical and analytical aspects of
                  information technology, preparing me for a career in this
                  dynamic field.
                </p>
              </div>
            </div>
            <div className="group" id="skills">
              <div className="row">
                <div className="col-md-6">
                  <div className="skills info-card">
                    <h2>Skills</h2>
                    <h3>HTML</h3>
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
                    <h3>WORDPRES</h3>
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
                    <h3>JavaScript</h3>
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
                    <h2>Contact Info</h2>
                    <div className="row">
                      <div className="col-1">
                        <i className="ion-android-calendar icon" />
                      </div>
                      <div className="col-9">
                        <span>9 Agustus 2004</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1">
                        <i className="ion-person icon" />
                      </div>
                      <div className="col-9">
                        <span>Jery Koupun</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1">
                        <i className="ion-ios-telephone icon" />
                      </div>
                      <div className="col-9">
                        <span>08884620592</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1">
                        <i className="ion-at icon" />
                      </div>
                      <div className="col-9">
                        <span>Jerykoupun@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hobbies group" id="hobbies">
              <h2 className="text-center">Hobbies</h2>
              <p className="text-center text-muted">
                My main hobby is playing football. I love the energy, teamwork,
                and strategy involved in the game. Its not only a fun way to
                stay active and healthy but also an excellent way to develop
                discipline and build camaraderie with others. Playing football
                brings excitement and joy to my life.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
