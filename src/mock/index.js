const Mock = require('mockjs')

Mock.mock('/api/login', 'POST', function(req) {
    return {
        status: 200,
        message: '登录成功',
        data: {
            username: JSON.parse(req.body).username,
            password: JSON.parse(req.body).password
        }
    }
    console.log(req.body)
})