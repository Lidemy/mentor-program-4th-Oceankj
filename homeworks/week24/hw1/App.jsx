/* eslint-disable import/no-unresolved */
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import NewPostPage from './page/NewPostPage';
import HomePage from './page/HomePage';
import LogInPage from './page/LoginPage';
import RegistertPage from './page/RegisterPage';
import AboutPage from './page/AboutPage';
import SingleArticlePage from './page/ArticlePage';
import EditPage from './page/EditPage';
import EditSinglePostPage from './page/EditSinglePostPage';
import DeletePostPage from './page/DeletePostPage';

function App() {
  return (
    <div>
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
          <Route path="/edit">
            <EditPage />
          </Route>
          <Route path="/edit_post/:id">
            <EditSinglePostPage />
          </Route>
          <Route path="/delete/:id">
            <DeletePostPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
