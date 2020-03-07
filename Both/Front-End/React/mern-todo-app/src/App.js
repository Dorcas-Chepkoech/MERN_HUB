import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodosList from './components/TodosList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';

import logo from "../src/assets/one.png";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="life.com" target="_blank">
              <img src={logo} alt =""/>
            </a>
            <Link to="/" className="navbar-brand">MERN-STACK</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link"> Create  Todos</Link>
                </li>
              </ul>
            </div>
          </nav>
					<Route path="/" exact component={TodosList} />
					<Route path="/edit/:id" component={EditTodo} />
					<Route path="/create" component={CreateTodo} />
				</div>
			</Router>
		);
	}
}

export default App;
