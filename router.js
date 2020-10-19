import User from './indeks/models/user.js';
import express from 'express';
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import conf from '.indeks/models/config.js';
import { sign } from 'crypto';

const router = express.Router();

var router = express.Router();
router.use (bodyParser.urlencoded({ extended: false }));
router.use (bodyParser.json(}};
    //add new user
userRouter.post('models', {req, res) => i
    try{
        var hashedPassword = bcrypt.hashSync (req.body.password, 8);

        user.create(;
            username : req.body.username,
            email;.req.body.email,
            password; hashedPassword
        ),
            function (err, user) {
                if (err) return res.status (500).send('there was a problem registering the user.")
                //create a token
                var token - jwt sign({ id: user_id}, conf.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status (200).send ({ auth: true, token: token });
            });
    //post
router.post('/homeworks', async (req, res) => {
    try{
        const{
            nama belakang,
            username,
            password,
            jabatan,
        } = req.body;

        const restoran = new restoran({
            nama belakang,
            username,
            password,
            jabatan,
        });

        const createdRestoran = await restoran.save();

        res.status(201).json(createdRestoran);

    }
    catch(error){
        res.status(500).json({ error: error })
    }
})

//@route GET /api/restoran
router.get('/restoran', async (req, res) => {
    const Restoran = await Restoran.find({});

    if(restoran) {
      res.json(restoran)
    } else {
      res.status(404).json({
        message: 'restoran not found'
      })
    }
  });

//@route GET /api/restoran/:id
router.get('/restoran/:id', async (req, res) => {
    const restoran = await restoran.findById(req.params.id);

    if(restoran) {
      res.json(restoran)
    } else {
      res.status(404).json({
        message: 'restoran not found'
      })
    }
  });

//@route PUT /api/restoran/:id
router.put('/restoran/:id', async (req, res) => {
    const {
      nama belakang,
      username,
      password,
      jabatan,
    } = req.body;

    const restoran = await Restoran.findById(req.params.id);

    if (restoran) {
      restoran.namabelakang = namabelakang;
      restoran.username = username;
      restoran.password = password;
      restoran.jabatan = jabatan;

      const updateRestoran = await restoran.save();
      res.json(updateRestoran)
    } else {
      res.status(404).json({
        message: 'restoran not found'
      })
    }
  });

//@route DELETE /api/restoran/:id
router.delete('/restoran/:id', async (req, res) => {
    const restoran = await Restoran.findById(req.params.id);

    if(restoran) {
      await restoran.remove();
      res.json({
        message: 'restoran removed'
      })
    } else {
      res.status(404).json({
        message: 'restoran not found'
      })
    }
  });

export default router;
        }
    catch(error) {
        res.status(500).json({ error: error})
    }
})
export default userRouter;
