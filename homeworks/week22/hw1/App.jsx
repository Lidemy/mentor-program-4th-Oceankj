/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { getMe } from './WebAPI';
import { AuthContext } from './context';
import NavBar from './component';
import NewPostPage from './page/newPostPage';
import HomePage from './page/homePage';
import LogInPage from './page/loginPage';
import RegistertPage from './page/registerPage';
import AboutPage from './page/aboutPage';
import SingleArticlePage from './page/articlePage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getMe().then((response) => {
        if (response.ok) {
          setUser(response.data);
        }
      });
    }
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ user, setUser }}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LogInPage />
            </Route>
            <Route path="/new_post">
              <NewPostPage />
            </Route>
            <Route exact path="/registert">
              <RegistertPage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route path="/article/:id">
              <SingleArticlePage />
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
