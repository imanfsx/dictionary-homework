import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      {/* <style>{'body { background: linear-gradient(to top, #09203f 0%, #537895 100%); background-attachment: fixed; }'}</style> */}
      <div className="App-container p-4">
        <header className="App-header pb-3">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="App-footer pt-2">
          <small>
            This project was coded with 💗 by{" "}
            <a
              href="https://github.com/imanfsx"
              target="_blank"
              rel="noreferrer"
            >
              Iman Sohail
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/imanfsx"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on GitHub{" "}
            </a>{" "}
            and{" "}
            <a href="" target="_blank" rel="noreferrer">
              {" "}
              hosted on Vercel{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
