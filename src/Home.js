import { makeStyles } from '@material-ui/core';
import { Box, Button, Card, Grid, InputBase, Pagination, Popover, Slider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { Arrowdown } from './assets/svg/Arrowdown.svg';
import Arrowdown from "./assets/svg/Arrowdown.svg";
import ResetButton from './Components/ResetButton';
import { Filters } from './Pages/Filters';
import { setFilterCar, sortCurrentPage } from './redux/ducks/Cars';
import { carData } from './services/static_data_car.js';
// import car1 from "./assets/Images/car1.png";
import { CarThumbnail } from './Components/CarThumbnail';
import { FilterChips } from './Pages/FilterChips';
import { red } from '@material-ui/core/colors';
import SortFilter from './Pages/SortFilter';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
// import { sortCurrentPage } from './redux/ducks/AppliedFilters';
// const useStyles = makeStyles((theme) => ({

//   filterBtn: {
//     "&:hover": {
//       border: "1px solid #EBEBEB !important",
//     },
//   },
//   DropDownArrow: {
//     marginLeft: theme.spacing(1),
//   },
// }));


const Home = () => {
  const dispatch = useDispatch();
  // const [filterData, setSearchBarValue] = useState("");
  const [searchBarValue, setSearchBarValue] = useState("");
  const FilterCarReducer = useSelector((state) => state.FilterCarReducer);
  const AppliedFiltersReducer = useSelector((state) => state.AppliedFiltersReducer);

  useEffect(() => {
    var arrdata = carData.filter((car, index) => {
      return (
        (AppliedFiltersReducer.filters['Price']['chipText'] !== "" ?
          (car['price'] >= AppliedFiltersReducer.filters['Price']['min']
            && car['price'] <= AppliedFiltersReducer.filters['Price']['max']) : true)
        &&
        (AppliedFiltersReducer.filters['City']['chipText'] !== "" ?
          car['location'].toLowerCase() == AppliedFiltersReducer.filters['City']['value'].toLowerCase() : true)
        &&
        (AppliedFiltersReducer.filters['Type']['chipText'] !== "" ?
          car['name'] == AppliedFiltersReducer.filters['Type']['value']
          : true))
    });


    console.log("????", arrdata)
    dispatch(setFilterCar(arrdata));
    // dispatch(sortCurrentPage(1))
  }, [AppliedFiltersReducer.filters])

  useEffect(() => {
    var abc = AppliedFiltersReducer.sort == 'lth' ? (FilterCarReducer.filterCars).sort((a, b) => a.price > b.price ? 1 : -1) : (FilterCarReducer.filterCars).sort((a, b) => a.price < b.price ? 1 : -1)
    dispatch(setFilterCar(abc));
    // dispatch(sortCurrentPage(1))
  }, AppliedFiltersReducer.sort)

  return (
    <div >      
      <Grid containerflexDirection="row" ml={3} mr={3} sx={{ display: 'flex', alignItems: "end" }}>
        <Filters />
      </Grid>
      <Grid>
        <FilterChips />
      </Grid>
      <Grid
        container
        justifyContent="flex-end"
        sx={{ marginTop: "10px", marginBottom: "15px" }}
      >
        <SortFilter />
      </Grid>      
      <Grid flexDirection={"row"} container
        sx={{
          marginTop: "5px",
          width: "100%",
        }}>

        {
          FilterCarReducer.filterCars.length != 0 ?
            (FilterCarReducer.currentPageData.map((carinfo, index) => {
              return <CarThumbnail carInfo={carinfo} index={index} key={index} />
            })) :
            (<CircularProgress />)
        }

      </Grid>

      <Stack
        direction={"row"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:'10px'
        }}
      >

        <Stack>
          <Pagination
            count={Math.ceil((FilterCarReducer.filterCars.length) / 4)}
            color="primary"
            // size={'meduim'}
            // variant="outlined"
            page={FilterCarReducer.currentPage}
            onChange={(e, p) => {
              dispatch(sortCurrentPage(p));
            }}

          />
        </Stack>
      </Stack>
    </div>
  )
}

export default Home
