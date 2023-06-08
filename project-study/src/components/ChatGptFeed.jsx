import React, { useState } from 'react';
import { Stack, CircularProgress, Box } from '@mui/material';

import { fetchFromChatGpt } from "../utils/fetchFromAPI";

const ChatGptFeed = () => {
  const option = {model: "text-davinci-003", 
                  prompt: "",
                  temperature: 0.5,
                  max_tokens: 2048,
                  top_p: 1,
                  frequency_penalty: 0.0,
                  presence_penalty: 0.0,
                  };

  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");

  async function handleSubmit(){
    setAns(null);
    option.prompt = input;
    const response = await fetchFromChatGpt(option);
    console.log(response);
    setAns(response.data.choices[0].text);
  }



  return (
    <Box style={{display: "flex", justifyContent: "center", flexDirection: "column", paddingTop: "50px"}}>
      <textarea className="textbox" placeholder="Enter your question" value={input} cols={150} rows={3} onChange={(e)=>setInput(e.target.value)}></textarea>
      <Stack direction="row" alignItems="center" p={2} sx={{ background: 'black', top: 0, justifyContent: "center"}}>
        <button className="chatgpt-btn" style={{margin: "2px"}} onClick={handleSubmit}>Send!</button>
        <button className="chatgpt-btn" style={{margin: "2px"}} onClick={()=>{setInput(""); option.prompt=""; setAns("")}}>Reset</button>
      </Stack>
          <span style={{marginTop: "30px", display: "flex", justifyContent: "center", fontSize: "25px", fontWeight: "bold", color: "rgb(168, 157, 157)"}}>{(ans===null || ans==="")? "":"Result from Chat GPT!"}</span>  
          <span style={{marginLeft: "120px", maxWidth: "1050px", display: "flex", justifyContent: "center", color: "white"}}>{ans===null?<CircularProgress sx={{color: "white"}} />:<pre>{ans}</pre>} </span>  
    </Box>
  )
}

export default ChatGptFeed

