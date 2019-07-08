import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';

// import routes: 
import Home from './components/pages/Home/HomePages';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import Post from './components/pages/Post/SinglePost';
import NewPosts from './components/pages/NewPosts/NewPost';
import NotFound from './components/pages/NotFound/NotFoundPage';

// glowny komponent aplikacji : 
class App extends React.Component {

  render() {
    return (
      //App renderuje szablon mainLayout ktory pokazuje Navbar, i footer
      //switch => przy uzyciu app , przekazywanie komponentow  App -> MainLayout -> Home....=> this.props.children, zwraca jeden konkretny komponent i nie sprawdza reszty przy kliknieciu w dany komponent
      <MainLayout >
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/NewPosts" exact component={NewPosts} />
          <Route path="/Post" exact component={Post} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
}
export default App;