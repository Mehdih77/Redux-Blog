import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './app/store';
import { fetchPosts } from './features/posts/postsSlice';
import { fetchUsers } from './features/users/usersSlice';

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.render(
    <React.StrictMode>
       <Provider store={store}>
          <App/>
       </Provider>
</React.StrictMode>, document.getElementById('root'));
