import axios from 'axios';


const KEY = 'AIzaSyDt2r2nG4yNrkEqnvVggg-XpGPYRF5GIsE';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults:5,
    key:KEY
  }

});