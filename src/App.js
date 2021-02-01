import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
    <>
      <Helmet>
        <meta
          name="description"
          content="Leonardo Dev Front | Programador Front-End"
        />
        <meta
          name="google-site-verification"
          content="4vynGKlbaE1CBzgV7cjPB0nJHyvltchEkzSbqkbVY9I"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:site_name" content="Leonardo Dev Front" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:url"
          content="https://leonardomprimieri.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Leonardo Dev Front | Programador Front-End"
        />
        <meta
          property="og:description"
          content="Olá, trabalho com desenvolvimento web há 2 anos e estou aqui para fazer seu site."
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Leonardo Dev Front" />
        <link rel="canonical" href="https://leonardomprimieri.vercel.app" />

        <meta
          name="keywords"
          content="criar site, website, sistema, programador, programação, front-end, frontend, guanambi, bahia, brasil, site minimalista, quero criar site, quero criar meu site, negócio online, javascript, design, sistema web"
        />
        <meta name="author" content="Leonardo Dev Front" />
        <meta name="copyright" content="© Leonardo Dev Front" />
      </Helmet>
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
    </>
  );
}

export default App;
