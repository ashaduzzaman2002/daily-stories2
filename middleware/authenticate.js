const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

exports.isLogin = (req, res, next) => {
    const cookie = req.headers.cookie
    if(!cookie) return res.redirect('/admin/login')
    if(!cookie.startsWith('jwt=')) return res.redirect('/admin/login')
    const token = cookie.split('=')[1]
    if(!token) return res.redirect('/admin/login')

    jwt.verify(token, 'dadasdaf', (err, user) => {
        if(user){
            req.user = user
            res.locals.user = user.name
        }  
        next()
    })
} 

exports.verifyAdmin = async (req, res, next) => {
    const user = req.user
    const {id} = user
    const admin = await Admin.findById(id)

    if(!admin) return res.redirect('back')
    if(admin.status !== 'ADMIN')  return res.redirect('back')
    res.locals.admin = true
    next()

}
