import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Navbar, Sidebar, GoogleDataFeed, YoutubeDataFeed, Home, Ebooks, ChatGptFeed} from "./";


const Feed = () => {
  const {search} = useParams();

  const [selectedCategory, setSelectedCategory] = useState("home");

  const [searchTerm, setSearchTerm] = useState(search);
  const [searchbarTerm, setSearchbarTerm] = useState("");

  useEffect(() => {
    console.log(selectedCategory)
    }, [selectedCategory]);

  console.log("hi");

  return (
    <Stack>
      <Navbar setSelectedCategory={setSelectedCategory} setSearchTerm={setSearchTerm} searchbarTerm={searchbarTerm} setSearchbarTerm={setSearchbarTerm}/>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box sx={{ height: { sx: "auto", md: "89vh"}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          
          <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", alignContent: "center"}}>
            <a href="https://www.linkedin.com/in/aditya-bijapurkar/" style={{color: "#fff", fontSize: "11px", display: "flex",   justifyContent: "center"}} target="_blank">Copyright @Aditya Bijapurkar</a>
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}> 
          {(() => {
            if(selectedCategory === "home")
              return <Home />
            else if (selectedCategory === "googlesearch")
              return <GoogleDataFeed searchTerm={searchTerm}/>
            else if(selectedCategory==="youtube")
              return <YoutubeDataFeed searchTerm={searchTerm}/>
            else if(selectedCategory==="chatgpt")
              return <ChatGptFeed/>
            else if(selectedCategory==="ebooks")
              return <Ebooks />
          })()}
        </Box>
      </Stack>
    </Stack>
  );
};

export default Feed;
