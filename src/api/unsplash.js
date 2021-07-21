import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID m6Jq-SYjFFHLhScMmJCBSy5kOVOwvLUQFEUkeyCfPNM",
  },
});
