import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://edu-kmitl-backend.herokuapp.com/`
  })
}
