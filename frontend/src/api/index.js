import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/'
const headers = {'Content-Type': 'application/json'}
// const headers_xml = {'Content-Type': 'application/xml'}
export const userSignup = body => axios.post(`${SERVER}member/signup`, {headers, body})
export const userLogin = body => axios.get(`${SERVER}member/login/${body.username}/`, {headers, body})  //body, post로 해야 보안토큰 걸 수 있음
export const boardSubmit = body => axios.post(`${SERVER}board/submit`, {headers, body})