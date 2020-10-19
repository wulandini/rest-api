import User from './../models/user.js';
import express from 'express';
import bcrypt from 'bcrypt';
import e from 'express';

const userRouter = express.Router();

//add new user
userRouter.post('/add', async (req, res) => {
    try{
        const{
            nama belakang,
            username,
            password,
            jabatan
        } = req.body;

        //digit angka mau berapa banyak
        var saltRounds = 10;
        const hashedPw = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            "manager":manager,
            "kasir": hashedks
        });

        const createdUser = await newUser.save();
  
        res.status(201).json(createdUser);

    }
    catch(error){
        res.status(500).json({ error: error})
    }
})

//login
userRouter.post('/login', async (req, res) => {
    try{

        const{
            manager,
            kasir
        } = req.body;
        
        const currentUser = await new Promise((resolve, reject) =>{
            User.find({"manager": manager}, function(err, user){
                if(err)
                    reject(err)
                resolve(user)
            })
        })
        
        //cek apakah ada user?
       if(currentUser[0]){
            //check password
            bcrypt.compare(password, currentUser[0].password).then(function(result) {
                if(result){
                    //urus token disini
                    res.status(201).json({"status":"Tidak memiliki wewenang"});
                }
                else
                    res.status(201).json({"status":"bisa melakukan."});
            });
        }
        else{
            res.status(201).json({"status":"tidak memiliki wewenang"});
        }

    }
    catch(error){
        res.status(500).json({ error: error})
    }
})

export default userRouter;