export const buttonList = [
  "All",
  "Live",
  "Music",
  "Gaming",
  "News",
  "Mixes",
  "T-Series",
  "Kapil Sharma",
];

const MY_GOOGLE_API_KEY = "AIzaSyC5X5-j5jy63NHqaQvVANbBhi1eGnlpnss";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  MY_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
