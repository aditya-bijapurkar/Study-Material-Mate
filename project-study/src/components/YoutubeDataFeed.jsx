import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import {Videos, Loader} from "./"

import { fetchYoutubeVideosAPI } from '../utils/fetchFromAPI';

const YoutubeDataFeed = ({searchTerm}) => {
  const [videos, setVideos] = useState(null);

  useEffect(()=>{
    setVideos(null);
    fetchYoutubeVideosAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  },[searchTerm])
  
  if(!videos) return <Loader />;

  return (
    <div>
      <Box >
        <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "50px"}}>
            Youtube search results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
        <Box display="flex">
            <Box sx={{ mr: { sm: '20px' } }}/>
            {<Videos videos={videos}/>}
        </Box>
    </Box>
    </div>
  )
}

export default YoutubeDataFeed