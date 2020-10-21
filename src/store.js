import { createStore } from 'redux'; 
import reducer from './reducer';

//createStore is a higher order function which 
//takes a function as an argument and returns a function.
const store = createStore(reducer);

export default store;