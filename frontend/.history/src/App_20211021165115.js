import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import LinkDefine from './Router/LinkDefine';

function App() {

  return (
    <Router>
      <div className="App">
          <LinkDefine />
      </div>
    </Router>
  );
}

export default App;
