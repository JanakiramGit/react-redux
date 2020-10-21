import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions'; 


const unsubscribe = store.subscribe(() => {
    console.log("Store state changed", store.getState());
});

store.dispatch(bugAdded("New Bug"));

unsubscribe();

store.dispatch(bugResolved(1));

console.log(store.getState());

















// import { transform } from 'lodash';
// import {compose, pipe} from 'lodash/fp';


// let input = "  JavaScript  ";
// let output = "<div>" + input + "</div>";


// const trim = str => str.trim();
// //conventional way of passing a single parameter
// //const wrapInDiv = str => '<div>${str}</div>';

// //currying way to pass mutliple parameters to return a function
// const wrap = type => str => '<${type}>$str</${type}>';
// const toLowerCase = str => str.toLowerCase();

// //Below code is conventional way of combining the above 3 functions
// //const result = wrapInDiv(toLowerCase(trim(input)));

// //Below code is simplifide code by using lodash
// //This still has ordering issue which can be fixed by using 'pipe' function.
// //const tranform = compose(wrapInDiv, toLowerCase, trim);

// const tranform = pipe(trim, toLowerCase, wrap("div"));
// //Now call the new function with the parameter
// console.log(transform(input)) ;



