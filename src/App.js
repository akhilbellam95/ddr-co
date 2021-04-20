/* eslint-disable no-undef */
import './App.scss';
import Footer from './components/footer/Footer';
import NavBar from './components/nav-bar/NavBar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import React from 'react';
import Progress from './Progress';

export default class App extends React.Component {

  state = {
    scrollPostion: 0
  }
  
  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        // Calculates the scroll distance
        this.calculateScrollDistance();
      });
    });
  };
  
  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();
  
    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)
  
    this.setState({
      scrollPostion,
    });
  }
  
  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }
  
  componentDidMount() {
    this.listenToScrollEvent();
  };

  render() {
    return (
      <div className="app ">
        <Progress scroll={ this.state.scrollPostion + '%' } />
        <NavBar className="navbar"></NavBar>
          <div className="expand ">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} exact />
              <Route path="/projects" component={Projects} exact />
              <Route path="/contact" component={Contact} exact />
            </Switch>
          </div>
        <Footer></Footer>
      </div>
    );
  }
}