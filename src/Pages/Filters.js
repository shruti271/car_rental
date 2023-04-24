import { Box, Button, FormControl, FormControlLabel, Grid, Popover, Radio, RadioGroup, Slider, Typography } from '@mui/material';
import React, { useState } from 'react'
import ResetButton from '../Components/ResetButton';
import Arrowdown from "../assets/svg/Arrowdown.svg";
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { clearCarType, clearCity, clearPrice, setCarType, setCity, setPrice } from '../redux/ducks/AppliedFilters';
// import ResetButton from './Components/ResetButton';

const useStyles = makeStyles((theme) => ({

  filterBtn: {
    "&:hover": {
      border: "1px solid #EBEBEB !important",
    },
  },
  DropDownArrow: {
    marginLeft: theme.spacing(1),
  },
}));


export const Filters = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const AppliedFiltersReducer = useSelector((state) => state.AppliedFiltersReducer);

  console.log(AppliedFiltersReducer.filters)
  const [Min, setMin] = React.useState(0);
  const [Max, setMax] = React.useState(100);

  const [priceAnchorEl, setpriceAnchorEl] = React.useState(null);
  const priceopen = Boolean(priceAnchorEl);

  const [cityAanchorEl, setcityAanchorEl] = React.useState(null);
  const cityopen = Boolean(cityAanchorEl);

  const [carTypeAnchorEl, setCarTypeAnchorEl] = React.useState(null);
  const carTypeopen = Boolean(carTypeAnchorEl);


  const CityName = ['Etobicoke', 'Waterloo', 'cambridge', 'kitchener', 'Mississaga','brampton','Toronto']
  const carTypes = ['neno', 'Chervolet-Equinox-LT','Ford-Explorer-XLT','190 CAD','jeep','Platinum','Honda']

  const [cityName, setCityName] = React.useState(null);
  const [carTypeValue, setCarTypeValue] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };


  // const id = open ? 'simple-popover' : undefined;


  return (
    <Grid
      container
      sx={{
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {/* price */}
      <Grid item lg={4} md={12} sm={12} xs={12}>

        <Button
          onClick={(event) => {
            setpriceAnchorEl(event.currentTarget);
          }}
          // aria-describedby={id} variant="contained" onClick={handleClick}
          size="large"
          // variant="outlined"
          // disableElevation
          // disableRipple
          sx={{
            color: "#2B2F42",
            whiteSpace: "nowrap",
            border: "1px solid #EBEBEB",
            borderRadius: "10px",
            marginRight: "14px",
            marginTop: "22px",
            "@media (max-width: 450px)": {
              width: "100%",
            },
          }}
          className={classes.filterBtn}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
              {"Price"}
            </Typography>
          </Box>
          <img
            alt="arrowdown"
            src={Arrowdown}
            className={classes.DropDownArrow}
          />
        </Button>
        <Popover
          anchorEl={priceAnchorEl}
          open={priceopen}
          add={priceopen ? 'simple-popover' : undefined}
          onClose={() => {
            setpriceAnchorEl(null);
          }}
          transformOrigin={{
            horizontal: "left",
            vertical: "top",
          }}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
        // id={id}
        // open={open}
        // anchorEl={anchorEl}
        // onClose={handleClose}
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'left',
        // }}
        >

          <Box sx={{ width: "150px", padding: "20px" }}>

            {Min + "- "}{Max}

            <Slider
              id="adcount"
              size="small"
              value={[Min, Max]}
              min={
                0
              }
              max={
                100
              }
              sx={{ color: "#00CBFF" }}
              onChangeCommitted={(e) => {
                console.log("???????????", e)

                dispatch(setPrice({ key: "Price", value: { min: Min, max: Max, chipText: `Price : ${Min}-${Max}`, isApplied: true } }))
              }}
              onChange={(e) => {
                setMin(e.target.value[0])
                setMax(e.target.value[1])
                // console.log(e.target.value)
              }}
            />
            <ResetButton
              onResetFunction={() => {
                dispatch(clearPrice());
                console.log("shruti pressed reset button")
              }}
              style={{
                fontWeight: 600,
                color: "#00CBFF",
                textTransform: "none",
              }}
              borderWidth={3}
            >
              <Typography
                paddingLeft={1}
                paddingRight={1}
                style={{
                  textTransform: "none",
                  color: "url(#linearColors)",
                }}
                variant="p"
              >
                Reset
              </Typography>
            </ResetButton>
          </Box>

        </Popover>


        {/* city */}

        <Button
          onClick={(event) => {
            setcityAanchorEl(event.currentTarget);
          }}
          size="large"
          // variant="outlined"
          disableElevation
          disableRipple
          sx={{
            color: "#2B2F42",
            whiteSpace: "nowrap",
            border: "1px solid #EBEBEB",
            borderRadius: "10px",
            marginRight: "14px",
            marginTop: "22px",
            "@media (max-width: 450px)": {
              width: "100%",
            },
          }}
          className={classes.filterBtn}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
              {"City"}
            </Typography>
          </Box>
          <img
            alt="arrowdown"
            src={Arrowdown}
            className={classes.DropDownArrow}
          />
        </Button>
        <Popover
          anchorEl={cityAanchorEl}
          open={cityopen}
          add={cityopen ? 'simple-popover' : undefined}
          onClose={() => {
            setcityAanchorEl(null);
          }}
          transformOrigin={{
            horizontal: "left",
            vertical: "top",
          }}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
        // id={id}
        // open={open}
        // anchorEl={anchorEl}
        // onClose={handleClose}
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'left',
        // }}
        >

          <Box sx={{ width: "170px", height: "300px" }}>
            <FormControl sx={{ padding: "10px" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={cityName}
                onChange={(e) => {
                  console.log("????????????????????", e.target.value)
                  // handleButtonType(e.target.value);
                  dispatch(setCity({ key: "City", value: { value: e.target.value, chipText: `City : ${e.target.value}`, isApplied: true } }))
                  setCityName(e.target.value);
                }}
              >
                {CityName.map((value) => {
                  return (
                    <FormControlLabel
                      key={value}
                      value={`${value}`}
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label={`${value}`}
                    />
                  );
                })}
              </RadioGroup>
              <Box
                display={"flex"}
                alignContent={"center"}
                justifyContent={"center"}
              >
                <ResetButton
                  onResetFunction={() => {
                    // handleButtonType("", true);
                    // setButtonTypeAnchorEl(null);
                    dispatch(clearCity());
                  }}
                  style={{
                    fontWeight: 600,
                    color: "#00CBFF",
                    textTransform: "none",
                  }}
                  borderWidth={3}
                >
                  <Typography
                    paddingLeft={1}
                    paddingRight={1}
                    style={{
                      textTransform: "none",
                      // color: "url(#linearColors)",
                    }}
                    variant="p"
                  >
                    Reset
                  </Typography>
                </ResetButton>
              </Box>
            </FormControl>
          </Box>

        </Popover>



        {/* car type */}

        <Button
          onClick={(event) => {
            setCarTypeAnchorEl(event.currentTarget);
          }}
          size="large"
          // variant="outlined"
          disableElevation
          disableRipple
          sx={{
            color: "#2B2F42",
            whiteSpace: "nowrap",
            border: "1px solid #EBEBEB",
            borderRadius: "10px",
            marginRight: "14px",
            marginTop: "22px",
            "@media (max-width: 450px)": {
              width: "100%",
            },
          }}
          className={classes.filterBtn}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
              {"Car Type"}
            </Typography>
          </Box>
          <img
            alt="arrowdown"
            src={Arrowdown}
            className={classes.DropDownArrow}
          />
        </Button>
        <Popover
          anchorEl={carTypeAnchorEl}
          open={carTypeopen}
          add={cityopen ? 'simple-popover' : undefined}
          onClose={() => {
            setCarTypeAnchorEl(null);
          }}
          transformOrigin={{
            horizontal: "left",
            vertical: "top",
          }}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
        >

          <Box sx={{ width: "170px", height: "300px" }}>
            <FormControl sx={{ padding: "10px" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={carTypeValue}
                onChange={(e) => {
                  console.log("????????????????????", e.target.value)
                  // handleButtonType(e.target.value);
                  dispatch(setCarType({ key: "Type", value: { value: e.target.value, chipText: `Car Type : ${e.target.value}`, isApplied: true } }))
                  setCarTypeValue(e.target.value);
                }}
              >
                {carTypes.map((value) => {
                  return (
                    <FormControlLabel
                      key={value}
                      value={`${value}`}
                      control={<Radio style={{ color: "#00CBFF" }} />}
                      label={`${value}`}
                    />
                  );
                })}
              </RadioGroup>
              <Box
                display={"flex"}
                alignContent={"center"}
                justifyContent={"center"}
              >
                <ResetButton
                  onResetFunction={() => {
                    // handleButtonType("", true);
                    // setButtonTypeAnchorEl(null);
                    dispatch(clearCarType());
                  }}
                  style={{
                    fontWeight: 600,
                    color: "#00CBFF",
                    textTransform: "none",
                  }}
                  borderWidth={3}
                >
                  <Typography
                    paddingLeft={1}
                    paddingRight={1}
                    style={{
                      textTransform: "none",
                      // color: "url(#linearColors)",
                    }}
                    variant="p"
                  >
                    Reset
                  </Typography>
                </ResetButton>
              </Box>
            </FormControl>
          </Box>

        </Popover>
      </Grid>
    </Grid>
  )
}
