import './App.css';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Slideshow from './components/Slideshow'
import { SliderData } from './components/SliderData';
import { ProjectsData } from './components/ProjectsData';
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
          <Banner />
          <LogoutButton />
          <Slideshow slides={SliderData} />
          {isAuthenticated && <AddPlacement />}
          <About/>
          <hr style={{opacity: 0.2}}/>
          <Projects projects={ProjectsData}/>
          <hr style={{opacity: 0.2}}/>
          <Contact />
          <Footer />
        </div>
    </Switch>
    </Router>
  );
}

export default App;
