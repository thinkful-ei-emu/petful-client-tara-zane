import config from '../src/config'



const catApiService={
  getCat(){
    return fetch(`${config.API_ENDPOINT}/cat`)
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteCat(id){
    return fetch(`${config.API_ENDPOINT}/cat/${id}`,{
      method: 'DELETE',
      headers:{
        'content-type': 'application/json'
      }
    })
    .then()

  }
}
