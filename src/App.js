import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom'
import PostsList from "./features/posts/PostsList";
import AddPost from "./features/posts/AddPost";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="App">
       <AddPost />
       <PostsList />
      </div>
    </Router>
    </>
  );
}

export default App;
