import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const YT_BASE_URL = "https://youtube-v31.p.rapidapi.com";
const GOOGLE_SEARCH_BASE_URL = "https://www.googleapis.com/customsearch/v1";
const RAPID_API_KEY = "cfe5cb1a51mshebc81040bfbd2b1p119cd5jsnc6a3e122fee0";
const GOOGLE_SEARCH_API_KEY = "AIzaSyDKp9Gzh-dW__jTJRMqK69AIiFPw--dKi8";
const GOOGLE_SEARCH_SEARCH_ENGINE_ID = "93d05d8331aec421b";
const CHAT_GPT_API_KEY = "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";

// -------------------------------------------------------------------------------------------------------------------------
// Google Search
const options_google = {
  params: {
    gl: "in",
    lr: "lang_en",
    num: "20",
    start: "0",
  },
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
  },
};

// `${GOOGLE_SEARCH_BASE_URL}?key=${GOOGLE_SEARCH_API_KEY}&cx=${GOOGLE_SEARCH_SEARCH_ENGINE_ID}&q=${term}`

export const fetchGoogleDataAPI = async (term) => {
  let res = [];

  for (let start = 0; start < 50; start += 10) {
    const { data } = await axios.get(
      `${GOOGLE_SEARCH_BASE_URL}?key=${GOOGLE_SEARCH_API_KEY}&cx=${GOOGLE_SEARCH_SEARCH_ENGINE_ID}&start=${start}&q=${term}`
    );
    res = [...res, data.items];
  }

  console.log(res);

  return res;
};

// -------------------------------------------------------------------------------------------------------------------------
// Youtube videos
const options_youtube = {
  params: {
    maxResults: 50,
    type: "video",
  },
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchYoutubeVideosAPI = async (url) => {
  const { data } = await axios.get(`${YT_BASE_URL}/${url}`, options_youtube);
  return data;
};

// -------------------------------------------------------------------------------------------------------------------------
// Chat GPT
// const configuration = new Configuration({
//   apiKey: CHAT_GPT_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export const fetchFromChatGpt = async (option) => {
//   const { response } = await openai.createCompletion(option);
//   return response;
// };
