import config from '../config'



const catApiService={
  getCat(){
    return fetch(`${config.API_ENDPOINT}/cat`)
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteCat(){
    return fetch(`${config.API_ENDPOINT}/cat`,{
      method: 'DELETE',
      headers:{
        'content-type': 'application/json'
      }
    })
    .then()

  }
}
export default catApiService;
