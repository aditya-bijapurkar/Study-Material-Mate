import React, { useState } from 'react';
// import fetchFromChatGpt from "../utils/fetchFromAPI";

const ChatGptFeed = () => {
  const option = {model: "text-davinci-003",  
                  temperature: 0,
                  max_tokens: 100,
                  top_p: 1,
                  prompt: "",
                  frequency_penalty: 0.0,
                  presence_penalty: 0.0,
                  stop: ["\n"],};

  const [input, setInput] = useState("");

  function handleSubmit(){
    option.prompt = input;
    // const response = fetchFromChatGpt(option);
    // console.log(response);
  }

  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", paddingTop: "50px"}}>
      <textarea className="textbox" placeholder="Enter your question" value={input} cols={150} rows={3} onChange={(e)=>setInput(e.target.value)}></textarea>
      <div style={{marginLeft: "500px", justifyContent: "center"}}>
        <button className="chatgpt-btn" style={{margin: "2px"}} onClick={handleSubmit}>Send!</button>
        <button className="chatgpt-btn" style={{margin: "2px"}} onClick={()=>{setInput(""); option.prompt="";}}>Reset</button>
      </div>
    </div>
  )
}

export default ChatGptFeed
