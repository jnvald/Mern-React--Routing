import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink 
  } from 'react-router-dom';
import Home from './components/Home';
import Four from './components/four.jsx';
import Hello from './components/Hello';
import Red from './components/blue/red';


function App() {
  return (
    <Router>
    <div className="container mt-5">
      <div className="btn-group" >
        <Link to="/" className="btn btn-dark" activeClassName="active">
          Inicio
        </Link>
        <Link to="four" className="btn btn-dark" activeClassName="active">
          Four
        </Link>
        <Link to="hello" className="btn btn-dark" activeClassName="active">
          Hello
        </Link>
        <NavLink to="blue/red" className="btn btn-dark" activeClassName="active">
          Hello Red
        </NavLink>
      </div>
      <hr/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/four" exact>
          <Four />
        </Route>
        <Route path="/hello" exact>
          <Hello />
        </Route>
        <Route path="/blue/red">
          <Red />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;                    

