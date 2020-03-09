import { combineReducers } from 'redux';
import ReducerPosts from './reducer-posts';
import ReducerActivePost from './reducer-active-post';
import { reducer as ReducerForm } from "redux-form";


const rootReducer = combineReducers({

  form: ReducerForm,
  posts: ReducerPosts, 
  activePost : ReducerActivePost
  
});

export default rootReducer;
