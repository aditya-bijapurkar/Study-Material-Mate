import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Sidebar } from '.';
import { fetchGoogleDataAPI } from '../utils/fetchFromAPI';
import { Stack, Box, Typography } from '@mui/material';

const GoogleDataFeed = ({searchTerm}) => {
  // const [res, setRes] = useState(null);
  // const {searchTerm} = useParams();

  // useEffect(()=>{
  //   fetchGoogleDataAPI(searchTerm)
  //   .then((data)=>setRes(data));
  // },[searchTerm]);

  // console.log(res);

  return (
      <Box>
        <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
            Search Results for Google search after feed
        </Typography>
      </Box>
  )
}

export default GoogleDataFeed
