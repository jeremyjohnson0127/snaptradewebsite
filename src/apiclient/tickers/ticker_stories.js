import Constants from '../../components/common/Constants.js';

const resource = Constants.API_URL + '/ticker/stories';

const tickers = {
  get: (callback, ticker) => {
    let accessToken = localStorage.getItem("accessToken");
    let authHeaders = accessToken ?
      { "Authorization" : "Bearer " + accessToken } : {}

    let getResource = resource + "/" + ticker;
    console.log(getResource)
    console.log('GET ' + getResource)

    fetch(getResource, {
      headers: authHeaders
    })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(getResource, json);
      console.log("stories json",json)
      callback(json, ticker)
    })
  },
}

export default tickers
