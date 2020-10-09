
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {ArticleList,Layout,ArticleDetail,PublishFormBlog} from './Components';


function App() {
  return(<Router>
      <Layout>
      <Switch>
      <Route exact path="/post-publish-form" children={<PublishFormBlog />} />
      <Route exact path="/:id" children={<ArticleDetail />} />
      <Route path="/" children={<ArticleList />} />
      </Switch>
      </Layout>
  </Router>
  )
}

export default App;
