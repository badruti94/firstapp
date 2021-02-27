import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Post from './components/Post';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute path='/contact' component={Contact} />
          <ProtectedRoute path='/about' component={About} />
          <ProtectedRoute path='/posts/:post_id' component={Post} />
          <Route component={PageNotFound} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;


