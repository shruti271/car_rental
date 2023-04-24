import { makeStyles } from '@material-ui/core';
import { Box, Button, Divider, FormControl, FormControlLabel, Popover, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import Arrowdown from "../assets/svg/arrowdown";
import Arrowdown from "../assets/svg/Arrowdown.svg";
import { sortPrice } from '../redux/ducks/AppliedFilters';

const useStyles = makeStyles((theme) => ({
  DropDownArrow: {
    marginLeft: theme.spacing(1),
  },
}));

function SortFilter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const location = useLocation();

  const [sortByAnchorel, setSortByAnchorel] = React.useState(null);
  const openSortByAnchorel = Boolean(sortByAnchorel);

  const AppliedFiltersReducer = useSelector((state) => state.AppliedFiltersReducer);

  const handleChangeSortType = (event, newValue) => {
    setSortByAnchorel(null);
    dispatch(sortPrice(newValue))
  };

  return (
    <>
      <Button
        onClick={(event) => {
          setSortByAnchorel(event.currentTarget);
        }}
        size="large"
        disableElevation
        disableRipple
        sx={{
          color: "#2B2F42",
          whiteSpace: "nowrap",
          border: "1px solid white",
          borderRadius: "10px",
          marginRight: "14px",
        }}
        endIcon={
          <img
            alt="arrowdown"
            src={Arrowdown}
            className={classes.DropDownArrow}
          />
        }
      >
        <Typography
          noWrap
          textTransform="capitalize"
          sx={{ fontWeight: 500, fontSize: "16px" }}
        >
          Sort by
        </Typography>
      </Button>
      <Popover
        anchorEl={sortByAnchorel}
        open={openSortByAnchorel}
        add={openSortByAnchorel ? "simple-popover" : undefined}
        onClose={() => {
          setSortByAnchorel(null);
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
        <Box>
          <FormControl sx={{ padding: "10px" }}>
            <RadioGroup
              aria-labelledby="sort-selector-label"
              name="sort-selector"
              value={AppliedFiltersReducer?.sort
              }
              onChange={handleChangeSortType}
            >
              <FormControlLabel
                value="lth"
                control={<Radio style={{ color: "#00CBFF" }} />}
                label={
                  <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                    Price - Low to High
                  </Typography>
                }
              />
              <FormControlLabel
                value="htl"
                control={<Radio style={{ color: "#00CBFF" }} />}
                label={
                  <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                    Price - High to Low
                  </Typography>
                }
              />

            </RadioGroup>
          </FormControl>

        </Box>
      </Popover>
    </>
  )
}

export default SortFilter