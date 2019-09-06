import config from '../config';

const userApiService={
  getUser(){
    return fetch(`${config.API_ENDPOINT}/user`)
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  switchUser(){
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'PATCH'
    })
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
}

export default userApiService