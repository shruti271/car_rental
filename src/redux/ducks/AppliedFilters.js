export const SET_PRICE = "SET_PRICE";
export const CLEAR_PRICE = "CLEAR_PRICE";
export const SET_CITY = "SET_CITY";
export const CLEAR_CITY = "CLEAR_CITY";
export const SET_CARTYPE = "SET_CARTYPE";
export const CLEAR_CARTYPE = "CLEAR_CARTYPE";
export const SORT_PRICE = "SORT_PRICE";
// export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const setPrice = (price) => ({
    type: SET_PRICE,
    payload:price
  });
export const clearPrice = () => ({
    type: CLEAR_PRICE,    
  });
export const setCity = (city) => ({
    type: SET_CITY,
    payload:city
  });
export const clearCity = (city) => ({
    type: CLEAR_CITY,
    payload:city
  });
export const setCarType = (type) => ({
    type: SET_CARTYPE,
    payload:type
  });
export const clearCarType = () => ({
    type: CLEAR_CARTYPE,    
  });
export const sortPrice = (price) => ({
    type: SORT_PRICE,  
    payload:price  
  });
// export const sortCurrentPage = (page) => ({
//     type: SET_CURRENT_PAGE,  
//     payload:page  
//   });

const initialState = {
    filters:{
        Price:{ min: 1, max: 1000, chipText: "", isApplied: false },
        City:{ value:"Etobicoke", chipText: "", isApplied: false },
        Type:{ value:"", chipText: "", isApplied: false },
    },
   sort:"ltr",
   currentPage:0,
};

const AppliedFiltersReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case SET_PRICE:
        console.log(action.payload)
        return {
          ...state,
          filters:{
            ...state.filters,
            [`${action.payload.key}`]: {
                ...action?.payload.value,
              },
          }
        };
      case SET_CITY:
        console.log(action.payload)
        return {
          ...state,
          filters:{
            ...state.filters,
            [`${action.payload.key}`]: {
                ...action?.payload.value,
              },
          }
        };
        case SET_CARTYPE:
        console.log(action.payload)
        return {
          ...state,
          filters:{
            ...state.filters,
            [`${action.payload.key}`]: {
                ...action?.payload.value,
              },
          }
        };
      
      case CLEAR_PRICE:
        console.log(action.payload)
        return {
          ...state,
          filters:{
            ...state.filters,
            Price: {
              min: 1, max: 1000, chipText: "", isApplied: false
              },
          }
        };
      case CLEAR_CITY:
        console.log(action.payload)
        return {
          ...state,
          filters:{
            ...state.filters,
            City: {
              value:"", chipText: "", isApplied: false
              },
          }
        };
      case CLEAR_CARTYPE:
        console.log(action.payload)
        return {
          ...state,
          filters:{
            ...state.filters,
            Type: {
              value:"", chipText: "", isApplied: false
              },
          }
        };
      case SORT_PRICE:
        console.log(action.payload)
        return {
          ...state,
          sort:action.payload
        };
      // case SET_CURRENT_PAGE:
      //   console.log(action.payload)
      //   return {
      //     ...state,
      //     currentPage:action.payload
      //   };
        
      default:
        return state;
    }
  };
  
  export default AppliedFiltersReducer;