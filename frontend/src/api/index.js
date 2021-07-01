import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/'
const headers = {'Content-Type': 'application/json'}
// const headers_xml = {'Content-Type': 'application/xml'}

export const memberDetail = body => axios.get(`${SERVER}api/member/detail`, {headers, body})
export const memberDelete = body => axios.delete(`${SERVER}api/member/delete/${body.username}/`, {headers, body})
export const memberList = () => axios.get(`${SERVER}adm/member/list`)
export const memberModify = body => axios.put(`${SERVER}api/member/modify/${body.username}/`, {headers, body}) 
export const memberRegister = body => axios.post(`${SERVER}api/member/register`, {headers, body}) 
export const memberRetriever = body => axios.get(`${SERVER}adm/member/retrieve/${body.username}/`, {headers, body}) 
export const memberLogin = body => axios.get(`${SERVER}api/member/login/${body.username}/`, {headers, body})  //body, post로 해야 보안토큰 걸 수 있음

// export const postDelete = body => axios.put(`${SERVER}api/post/delete`, {headers, body})
// export const postDetail = body => axios.get(`${SERVER}api/post/detail/${body.username}/`, {headers, body}) 
// export const postList = body => axios.post(`${SERVER}api/post/list`, {headers, body})
// export const postModify = body => axios.get(`${SERVER}api/post/modify/${body.username}/`, {headers, body})  //body, post로 해야 보안토큰 걸 수 있음
export const postRegister = body => axios.post(`${SERVER}api/post/register`, {headers, body}) 
// export const postRetrieve = body => axios.get(`${SERVER}api/post/retrieve/${body.username}/`, {headers, body}) 

// export const itemDelete = body => axios.put(`${SERVER}item/delete`, {headers, body})
// export const itemDetail = body => axios.get(`${SERVER}item/detail/${body.username}/`, {headers, body}) 
// export const itemList = body => axios.post(`${SERVER}item/list`, {headers, body})
// export const itemModify = body => axios.get(`${SERVER}item/modify/${body.username}/`, {headers, body})  //body, post로 해야 보안토큰 걸 수 있음
// export const itemRegister = body => axios.get(`${SERVER}item/register/${body.username}/`, {headers, body}) 
// export const itemRetrieve = body => axios.get(`${SERVER}item/retrieve/${body.username}/`, {headers, body}) 

