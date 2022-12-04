import SideBar from "./components/sidebar/sidebar";
import TransitionScreen from "./components/transition-screen/transition-screen";
import MenuMobileContext from "./contexts/menu-mobile-context";
import TransitionScreenContext from "./contexts/transitions-screen-context";
import About from "./screens/about/about-screen";
import Certificates from "./screens/certificates/certificate-screen";
import GitHub from "./screens/github/github-screen";
import Home from "./screens/home/home-screen";
import Projects from "./screens/projects/projects-screen";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/styles/global.css";
import MenuButton from "./components/menu-button/menu-button";

function App() {
  const [linkClicked, setLinkClicked] = useState(false);
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <TransitionScreenContext.Provider value={{ linkClicked, setLinkClicked }}>
        <MenuMobileContext.Provider value={{ setMobile }}>
          <BrowserRouter>
            <TransitionScreen transition={linkClicked} />
            <SideBar mobile={mobile} />
            <MenuButton setMobile={setMobile} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
              <Route path='/github' component={GitHub} />
              <Route path='/certificates' component={Certificates} />
            </Switch>
          </BrowserRouter>
        </MenuMobileContext.Provider>
      </TransitionScreenContext.Provider>
    </>
  );
}

export default App;
