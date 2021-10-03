import './App.css';
// import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
// import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
// import Carousel from './components/Carousel';
// import Slider from './components/Slider'
import Slideshow from './components/Slideshow'
import { SliderData } from './components/SliderData';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddPlacement from './components/AddPlacement'


function App() {
  const { isLoading } = useAuth0();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Router>
      <Switch> 
        <div className="App">
        <Route path="/login" render={loginWithRedirect} />
          <Navbar />
          {isLoading && <div>Loading... </div>} 
          {/* <Profile /> */}
          <Banner />
          <LogoutButton />
          <Slideshow slides={SliderData} />
          {isAuthenticated && <AddPlacement />}
          <About/>
          <hr style={{opacity: 0.2}}/>
          <Projects />
          <hr style={{opacity: 0.2}}/>
          <Contact />
          <Footer />
        </div>
    </Switch>
    </Router>
  );
}

export default App;
