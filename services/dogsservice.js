import config from '../src/config'



const catApiService={
  getDog(){
    return fetch(`${config.API_ENDPOINT}/dog`)
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteCat(id){
    return fetch(`${config.API_ENDPOINT}/dog/${id}`,{
      method: 'DELETE',
      headers:{
        'content-type': 'application/json'
      }
    })
    .then()

  }
}
