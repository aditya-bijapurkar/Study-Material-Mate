import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

// -------------------------------------------------------------------------------------------------------------------------
// Google Search
const GOOGLE_SEARCH_BASE_URL = "https://www.googleapis.com/customsearch/v1";
// const GOOGLE_SEARCH_API_KEY = "AIzaSyDKp9Gzh-dW__jTJRMqK69AIiFPw--dKi8";
const GOOGLE_SEARCH_API_KEY = "AIzaSyCtYjsltojEkhxxu-gh1hlorjYs664g8aU";
const GOOGLE_SEARCH_SEARCH_ENGINE_ID = "93d05d8331aec421b";

export const fetchFromGoogleSearch = async (term) => {
    const res = [];
    for (let r = 0; r < 1; r++) {
        const { data } = await axios.get(
            `${GOOGLE_SEARCH_BASE_URL}?key=${GOOGLE_SEARCH_API_KEY}&cx=${GOOGLE_SEARCH_SEARCH_ENGINE_ID}&start=${
                r * 10 + r
            }&q=${term}`
        );
        for (let i = 0; i < 10; i++) res.push(data.items[i]);
    }

    return res;
};

// -------------------------------------------------------------------------------------------------------------------------
// Youtube videos
const RAPID_API_KEY = "cfe5cb1a51mshebc81040bfbd2b1p119cd5jsnc6a3e122fee0";
const YT_BASE_URL = "https://youtube-v31.p.rapidapi.com";

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
const CHAT_GPT_API_KEY = "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";

const configuration = new Configuration({
    apiKey: CHAT_GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const fetchFromChatGpt = async (option) => {
    const response = await openai.createCompletion(option);
    return response;
};
