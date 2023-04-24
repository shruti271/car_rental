import {carData} from '../../services/static_data_car'
export const SET_FILTERED_CARS = "SET_FILTERED_CARS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const setFilterCar = (allCars) => ({
    type: SET_FILTERED_CARS,
    payload:allCars
  });

  export const sortCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,  
    payload:page  
  });

const initialState = {
    filterCars:carData,
    currentPageData:[],
    currentPage:1,
  //  allCars:carData  
};



const FilterCarReducer = (state = initialState, action) => {
    switch (action.type) {      
      case SET_FILTERED_CARS:
      console.log("l")
        console.log(action.payload);
        return {
          ...state,
          filterCars: [...action.payload],
          // currentPageData:action.payload.slice(0,4),
          currentPage:1,
          currentPageData:[...action.payload.slice(0,4)]
        };
        case SET_CURRENT_PAGE:
          console.log("???",action.payload)
          console.log("???..",4*(action.payload-1)+1)
          console.log("???.",4*(action.payload-1)+1+4)
          return {
            ...state,
            currentPage:action.payload,
            // currentPageData:[...state.filterCars.slice(0,4)]
            currentPageData:[...state.filterCars.slice((4*(action.payload-1)),4*(action.payload-1)+4)]
          };

      default:
        return state;
    }
  };
  
  export default FilterCarReducer;