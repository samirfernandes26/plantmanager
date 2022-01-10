import axios from 'axios'

const ApiServices = axios.create({
  baseURL: 'http://192.168.254.182:3333',
})

export default ApiServices

//https://app.rocketseat.com.br/node/nlw-5-react-native/lesson/nlw-5-workshop-03-react-native
//50 minutos
// yarn server -H 192.168.254.182 --port 3333