import ajax from './ajax'

export const postAnswer = (answer, type) => ajax('http://localhost:4000/postAnswer', {answer, type}, 'POST')
export const getAnswer = (type) => ajax('http://localhost:4000/getAnswer', {type}, 'GET')