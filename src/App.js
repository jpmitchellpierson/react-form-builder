import React from 'react';
import Create from './components/createPage';
import Preview from './components/previewPage';
import Export from './components/exportPage';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul id="nav">
        <li className="navbar"><Link className="link" to="/">Create</Link></li>
        <li className="navbar"><Link className="link" to="/preview">Preview</Link></li>
        <li className="navbar"><Link className="link" to="/export">Export</Link></li>
      </ul>

      <hr />
      <Route exact path="/" component={Create} />
      <Route path="/preview" component={Preview} />
      <Route path="/export" component={Export} />
    </div>
  </Router>
)

export default App;
