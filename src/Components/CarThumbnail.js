import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Stack } from '@mui/system';

export const CarThumbnail = ({ carInfo, index }) => {
    // const FilterCarReducer = useSelector((state) => state.FilterCarReducer);
    const AppliedFiltersReducer = useSelector((state) => state.AppliedFiltersReducer);

    return (

        <Grid
            item
            xl={3}
            lg={3}
            md={4}
            sm={6}
            xs={12}

            sx={{
                p: { lg: "10px", md: "10px", sm: "10px", xs: "0px" },
                pb: { xs: 2 },
            }}
        >

            <Card sx={{ boxShadow: 20 }} onClick={() => {
                window.location.href = "../Pages/car.html?car_name=" + carInfo.name + "&price=" + carInfo.price + "&mail=" + carInfo.owner_email + "&phone=" + carInfo.owner_phone + "&location=" + carInfo.location + "&owner_name=" + carInfo.owner_name + "&description=" + carInfo.description + "&img=" + carInfo.img + "&carId=" + carInfo.carid+"&src="+carInfo.src
            }}>
                {<img src={`${carInfo?.img}`} width="100%" height={"190px"} />}

                <Box>
                    <Typography fontWeight={'bold'} fontStyle={{ fontSize: '20px' }}>{carInfo.name}</Typography>

                    <Stack direction={"row"} spacing={8} sx={{ justifyContent: 'center', alignItems: 'center'}}>
                        <Typography fontWeight={'bold'}>Rent : ${carInfo.price}</Typography>
                        <Stack direction={'row'}>
                            <LocationOnIcon />
                            <Typography sx={{ justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                                {carInfo.location}
                            </Typography>
                        </Stack>

                    </Stack>


                    <Stack direction={"row"} spacing={1} sx={{pl:3}}>
                        <EmailIcon />
                        <Typography>{carInfo.owner_email}</Typography>
                    </Stack>

                    <Stack direction={'row'} spacing={1} sx={{pl:3}}>
                        <LocalPhoneIcon style={{ fontSize: 20 }} />
                        <Typography> {carInfo.owner_phone}</Typography>
                    </Stack>

                    

                </Box>

            </Card>
        </Grid>

    )
}
