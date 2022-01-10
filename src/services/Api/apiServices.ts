import axios from 'axios'

const ApiServices = axios.create({
  baseURL: 'https://192.168.254.1:3333',
})

export default ApiServices

//https://app.rocketseat.com.br/node/nlw-5-react-native/lesson/nlw-5-workshop-03-react-native
//50 minutos
// json-server ./src/services/apiServices/server.json --host 192.168.254.1 --port 3333