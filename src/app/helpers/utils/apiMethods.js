import axios from 'axios';

export const get= async (url)=>{
    return axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
}

export const post= async (url,body)=>{
    return axios
    .post(url,body)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
}

export const put= async (url,body)=>{
  return axios
  .put(url,body)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return error;
  });
}