export default function( { dispatch }) {
  return next => action => {
    if(!action.payload || !action.payload.then) {
      // if the action does not have payload
      // or, the patload does not have a .then property
      // we don't care about it, send it on
      return next(action)
    }
    // make sure the action's promise resolve
    action.payload.then(res => {
      // now we need to create a new action and then go through all the middlewares

      // take all that the current action contains and extends over it the new payload which is the response.
      const newAction = { ...action, payload: res };
      // dispatch take this action, go to the very top and go through all those actions again
      dispatch(newAction);
    });
  };
}


//// ES5
// export default function( { dispatch }) {
//   return function(next) {
//     return function(action) {
//       console.log(action);
    // next will forward this to the next middleware and if there is none- that it will go to the reducers
//       next(action)
//     }
//   }
// }
