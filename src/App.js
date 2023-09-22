import './App.css';
import Topbar from "./components/topbar";
import Navbar from "./components/navbar";
import Messages from './components/messages';
import Test from './components/test';
import Resource from './components/resource';
import Stats from './components/stats';
import Settings from './components/settings';

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

const CombinedTest = () => (
  <>
    <Test />
    <Messages />
  </>
);
const CombinedResource = () => (
  <>
    <Resource />
    <Messages />
  </>
);
const CombinedStats = () => (
  <>
    <Stats />
    <Messages />
  </>
);

function App() {
  return (
    <>
      <html lang="en" >
        <head>
          <title>Krishna - AI-based Career Councelling</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
          <link rel="stylesheet" href="./style.css" />

        </head>
        <body>
          <div className="app-container">
          <HashRouter>
            <Topbar />
            
            <div className="app-content">
              <Navbar />
              <Routes>
                <Route exact path="/" element={<CombinedTest />}> </Route>
                <Route exact path="/resource" element={<CombinedResource />}> </Route>
                <Route exact path="/stats" element={<CombinedStats />}> </Route>
                <Route exact path="/settings" element={<Settings />} > </Route>
              </Routes>
            </div>
          </HashRouter>
          </div>
          <script src="./script.js"></script>

        </body>
      </html>
    </>
  );
}

export default App;
