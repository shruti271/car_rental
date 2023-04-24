import { combineReducers, createStore } from "redux";
import AppliedFiltersReducer from "./ducks/AppliedFilters";
import FilterCarReducer from "./ducks/Cars";

const reducer = combineReducers({
    AppliedFiltersReducer: AppliedFiltersReducer,
    FilterCarReducer:FilterCarReducer,
  });


//   const composeEnhancers =
//   window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
// const sagaMiddleWares = createSagaMiddleware();
// const middleWares = [sagaMiddleWares];

// if (process.env.NODE_ENV === "development") {
//   middleWares.push(logger);
// }


  const store = createStore(
    reducer    
  );

  export const getStore = () => {
    return store;
  };

  export default store;