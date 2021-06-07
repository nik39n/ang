import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Students from './components/Students/Students';
import Groups from './components/Groups/Groups';
import Main from './components/Main/Main';
import './App.css';


import { Route, NavLink, Redirect,Switch} from 'react-router-dom';

function App() {
  return (
    <div classNameName="App">
      <h1>Маршрутизация</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink activeClassName="wfm-active" exact to="/">Home</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeClassName="wfm-active" aria-current="page" exact to="/students">Students</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="wfm-active" exact to="/groups">Groups</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Students/>
      <Groups/> */}
      {/* <Route path="/" exact render={()=><h1>Home</h1>}/>
      <Route path="/students" exact render={()=><h1>Students</h1>}/>
      <Route path="/groups" exact render={()=> <h1>Groups</h1>}/> */}
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/students" exact component={Students}/>
        <Route path="/groups" exact component={Groups}/>
        <Route render={()=> <h1>404 Раздел не найден</h1>  }/>

      </Switch>
    </div>  
  );
}

export default App;
