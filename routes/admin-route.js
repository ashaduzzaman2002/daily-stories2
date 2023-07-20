const Router = require('express')
const { adminDashboard, adminLoginPage, adminLoginHandler, adminLogout, addStroy } = require('../controllers/admin-controller')
const {verifyAdmin, isLogin} = require('../middleware/authenticate')
const router = Router()


router.get('/admin', isLogin, verifyAdmin, adminDashboard)
router.route('/admin/login')
    .get(adminLoginPage)
    .post(adminLoginHandler)

router.get('/logout', isLogin, adminLogout)


router.get('/admin/add_story', isLogin, verifyAdmin, addStroy)


module.exports = router