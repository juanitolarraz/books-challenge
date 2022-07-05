let loggedMiddleware = (req,res,next) => {
    let {cookies} = req

    if ('login' in cookies) {
        res.locals.isLogged = true
        res.locals.name = cookies.name
        console.log(cookies.name)
    }

    res.locals.admin = cookies.admin

    /*if (req.session.login) {
        res.locals.isLogged = true
        res.locals.name = req.session.name
        console.log(res.locals.name)
    }
    
    if (req.session.admin) {
        res.locals.isAdmin = true
        console.log(res.locals.isAdmin)
    }*/


    next();
}

module.exports = loggedMiddleware;