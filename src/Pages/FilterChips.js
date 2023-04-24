import { Chip, Grid } from '@mui/material';
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from 'react-redux';
import { clearCarType, clearCity, clearPrice } from '../redux/ducks/AppliedFilters';

export const FilterChips = () => {
  const dispatch = useDispatch();

    const AppliedFiltersReducer = useSelector((state) => state.AppliedFiltersReducer);

    return (
        <div>
            <Grid container sx={{ marginTop: 1 }}>
                {
                    AppliedFiltersReducer.filters && Object.keys(AppliedFiltersReducer.filters).map((filter, index) => {
                        return (AppliedFiltersReducer.filters[filter]['chipText'] &&
                            <Chip
                                key={index}
                                color="primary"
                                label={AppliedFiltersReducer.filters[filter]["chipText"]}
                                deleteIcon={
                                    <CloseIcon
                                        style={{
                                            color: "white",
                                            backgroundColor: "#00CBFF",
                                        }}
                                    />
                                }
                                onDelete={() => {
                                    console.log("commmmmmmmmmmmmm")
                                    //   pageName === PageNameEnum.AdlibraryDatabase &&
                                    if(filter==="Price")
                                        dispatch(clearPrice());
                                        else if(filter==="City")
                                        dispatch(clearCity());
                                        else if(filter==="Type")
                                        dispatch(clearCarType());
                                    //   dispatch(
                                    //     pageName === PageNameEnum.AdlibraryDatabase
                                    //       ? allAdsPeramsDuck.clearSingleFilter({
                                    //           key: filter,
                                    //         })
                                    //       : savedAdsPeramsDuck.clearSavedSingleFilter({
                                    //           key: filter,
                                    //         })
                                    //   );
                                }}
                                sx={{
                                    borderRadius: 2,
                                    backgroundColor: "#00CBFF",
                                    margin: 0.5,
                                }}
                            />
                        )
                    })
                }
            </Grid>
        </div>
    )
}
