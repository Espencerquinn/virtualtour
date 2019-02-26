const bcrypt = require('bcryptjs')

module.exports = {
    registerUser: async (req, res) => {
        try {
        const {fullname, username, email, phonenumber, password, url } = req.body;
        const { session } = req;
        const db = req.app.get('db');
        var salt = bcrypt.genSaltSync(10); //test
        var hash = bcrypt.hashSync(password, salt);
        let newUser = await db.user.register_User({fullname, username, email, phonenumber, password: hash, url })
        console.log(newUser)
        newUser = newUser[0];
        console.log('newuser', newUser)
        delete newUser.password;
        session.user = {...newUser}
        res.status(201).send(session.user) 
        }
        catch(error){
            console.log(error)
        }



    },
    login: async (req, res) => {
        console.log('login endpoint hit', req.body)
        const {username, password} =req.body;
        const {session} = req;
        const db = req.app.get("db");
        let user = await db.user.login({user: username, pass: password}) //massive
        // console.log({user})
        user = user[0]; //pulling the user out of the array 
        // console.log({user})
        if (!user) {
            return res.sendStatus(418);
        }
        console.log(password, user.password)
        const foundUser = bcrypt.compareSync(password, user.password);

        console.log(foundUser)
        if (foundUser) {
            delete user.password;
            session.user = user;
            res.status(200).send(session.user);
        }   else {
            res.status(401).send('nice try');
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    },

    getProperties: (req, res) => {
        const db = req.app.get('db');
        db.properties.get_properties()
        .then((properties) => {res.status(200).send(properties)})
        .catch((err) => res.status(500).send('Error Getting Properties'))
    },
    deleteProperty: (req, res) => {
        const db = req.app.get('db');
        db.properties.delete_property([req.params.id])
        .then((property) => {res.status(200).send(property)})
        .catch((err) => {res.status(200).send('Error Deleting House')})
    },
    getUser: (req, res) => {
    if (req.session.user) {
        res.status(200).send({user: req.session.user})
        } else {
        res.status(200).send({message: "How did you find this page?"})
        }
    },
    updateUser: (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id;
        const {fullname, username, email, phonenumber} = req.body;
        // let id = Number(id);
        db.user.update_user([id, fullname, username, email, phonenumber])
        .then(() => {
            console.log('Edit User Complete')
        })
        .catch((err) => {
            res.status(500).send('Update Error');
            console.log(err);
        })
    },
};