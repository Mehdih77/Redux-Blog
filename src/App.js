import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PostsList from "./features/posts/PostsList";
import AddPost from "./features/posts/AddPost";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import PostPage from "./features/posts/PostPage";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="App">
       <Switch>
         <Route path='/' exact>
          <AddPost />
          <PostsList />
         </Route>
         <Route path='/users' exact>
          <UsersList/>
         </Route>
         <Route path='/users/:userId' exact>
          <UserPage/>
         </Route>
         <Route path='/posts/:postId' exact>
          <PostPage/>
         </Route>
      
       </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
