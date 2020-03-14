const Mock = require('mockjs')

Mock.mock('/api/login', 'POST', function(req) {
    let { username, password } = JSON.parse(req.body)
    return {
        username,
        password,
        status: 200
    }
})