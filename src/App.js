import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import About from './screens/About/About';
import Certificates from './screens/Certificates/Certificates';
import GitHub from './screens/GitHub/GitHub';
import Home from './screens/Home/Home';
import Projects from './screens/Projects/Projects';

import './assets/styles/global.css';
import TransitionScreenContext from './contexts/TransitionScreenContext';
import MenuMobileContext from './contexts/MenuMobileContext';
import { useState } from 'react';
import TransitionScreen from './components/TransitionScreen/TransitionScreen';
import MenuButton from './components/MenuButton/MenuButton';

function App() {
  const [linkClicked, setLinkClicked] = useState(false);
  const [mobile, setMobile] = useState(false);
  return (
    <TransitionScreenContext.Provider value={{ linkClicked, setLinkClicked }}>
      <MenuMobileContext.Provider value={{ setMobile }}>
        <BrowserRouter>
          <TransitionScreen transition={linkClicked} />
          <SideBar mobile={mobile} />
          <MenuButton setMobile={setMobile} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/github" component={GitHub} />
            <Route path="/certificates" component={Certificates} />
          </Switch>
        </BrowserRouter>
      </MenuMobileContext.Provider>
    </TransitionScreenContext.Provider>
  );
}

export default App;
