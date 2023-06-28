const User = require('../../models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

module.exports =
{
    create,
    login,
    checkToken
}

function checkToken(req, res){
console.log('req.user', req.user)
res.json(req.exp)
}

async function create(req, res) {
    //this was used to test our front end form api call functionality
    // console.log("this is req.body", req.body)
    // res.json({
    //     user: {
    //         name: req.body.name,
    //         email: req.body.email
    //     }
    // })
    try {
        //add user to db
        const user = await User.create(req.body);
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        res.status(400).json(err)
    }
}

//function to log in a user
async function login(req, res) {
    try {
        //find the user in the db, throw an error if not found
        //compare the password using decrypt
        //log them in if there's a match
        //throw an error if there's no match
        const user = await User.findOne({email: req.body.email})
        if (!user) throw new Error()

        const match = await bcrypt.compare(req.body.password, user.password)

        if (match){
        const token = createJWT(user)
        res.json(token)
    } else {
        throw new Error()
    }



    } catch {
        res.status(400).json("Unable to log in")
    }
}


/////////////////helper functions //////////////////
//called whenever we need to create a web token
function createJWT(user) {
    return jwt.sign(
        //data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

////////////////////////////////////////////////////

