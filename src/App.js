import React, { useState } from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle.js"
import { Home } from "./Router/Home/Home"
import { Nav } from "./Components/Nav/Index"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [changeComponents, setChangeComponents] = useState(true)


  const theme = {
    primary_color: "#000",
    secundary_color: "#fff",
    ternary_color: "#F5C32E",
    font_color: "#000",
    font_padrao: "Roboto, sans-serif",
    font_secundaria: "Abel, sans-serif",
  };


  const AuthenticatedRoutes = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Router >
    )
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Router>
          <Nav isOpen={isOpen} setIsOpen={setIsOpen} />

          <Switch>
            <Route path="/" exact>
              <Home isOpen={isOpen} setIsOpen={setIsOpen} changeComponents={changeComponents} setChangeComponent={setChangeComponents}/>
            </Route>
            <Route component={AuthenticatedRoutes} />
          </Switch>

        </Router>

      </ThemeProvider>


    </>
  );
}

export default App;
