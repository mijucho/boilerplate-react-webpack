import request from 'superagent'

export function displayCake () {
    return request.get('/gallery')
    .then(res => {
        const cakes =res.body
        console.log(cakes)
        return cakes
    })
    .catch(() => {
        throw Error('You need to implement an API route for /v1/posts')
      })
}