const mongoose = require("mongoose");
const User = mongoose.model("User")

module.exports ={
    register: (req, res) => {
        let user = new User(req.body);
        user.save()
            .then(() => {
                req.session.user_id = user._id
                req.session.first_name = user.first_name
                res.json(true);
            })
            .catch(() => {
                console.log("error while saving user")
                res.status(500).json(err);
            })
    },

    login: ( req, res ) => {
        if(req.body.email){
            User.findOne({email: req.body.email}, (err, user) => {
                if(err) {
                    console.log("Found error while looking for user")
                    res.status(500).json(err)
                  }else{
                      if(user){
                          if(user.password === req.body.password){
                            req.session.user_id = user._id
                            req.session.first_name = user.first_name
                            res.json(user._id)
                          }else{
                              console.log("password doesn't match")
                          }
                      }else{
                          console.log("cannot find user")
                      }
                  }
            })
        }
    },

    all_users: (req, res) => {
        User.find({})
            .sort( 'last_name')
            .catch( err => res.status(500).json( err ))
            .then( data => res.json(data));
    },

    checkStatus: (req, res) => {
		if(req.session.user_id){
			res.json({_id: req.session.user_id, first_name: req.session.first_name})
		} else {
			res.status(500).json("Not logged in")
		}
	},

    logout: (req,res) => {
        req.session.destroy()
        res.redirect('/')
    }


}