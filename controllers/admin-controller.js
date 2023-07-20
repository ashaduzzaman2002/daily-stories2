const Admin = require('../models/Admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.adminDashboard = async (req, res) => {
    res.render('public/admin', {
        title: 'Dashboard - Daily Stories'

    })
}


exports.adminLoginPage = async (req, res) => {
    res.render('public/login', {
        loginPage: true,
        title: 'Login - Daily Stories'
    })
}

exports.adminLoginHandler = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await Admin.findOne({email})
        if(!user) return console.log('object');

        const isMatched = await bcrypt.compare(password, user.password)

        if(!isMatched) return console.log('object');
        const token = jwt.sign({id: user._id, name: user.name}, 'dadasdaf', {
            expiresIn: '10h'
        })

        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 36000000),
            httpOnly: true,
            sameSite: 'lax'
        })

        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}


exports.adminLogout = async (req, res) => {
    
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
    });

  res.redirect('back');
}




exports.addStroy = (req, res) => {
    res.render('public/addStory')
}