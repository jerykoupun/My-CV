import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <footer className="page-footer">
        <div className="container">
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61558106347977&mibextid=kFxxJD">
              <i className="ion-social-facebook" title="Facebook" />
            </a>
            <a href="https://www.instagram.com/jerr_Koupun">
              <i className="ion-social-instagram-outline" title="Instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
