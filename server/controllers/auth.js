import bcrypt from 'bcrypt';
import User from '../models/user';
import jwt from 'jsonwebtoken';

class AuthController {
  static async createUserWithPassword(req, res) {
    const { name, email, password } = req.body;
    // const photoURL = req?.body?.photoURL;
    if (!name || !email || !password) {
      res.status(403).json({ error: 'Submit all required fields' });
      return;
    }
    const savedUser = await User.findOne(
      { email: email }
    );
    // console.log(savedUser)
    if (savedUser) {
      res.status(403).json( "This email has already been registered!" );
      return;
    }
    // if(photoURL){
    //   const user  = await User.create({ name, email, profileImage:photoURL });
    //   return res.status(201).json({
    //     id: `${user.id}`,
    //     name: `${user.name}`,
    //   });
    // } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user  = await User.create({ name, email, password: hashedPassword});
      await user.save()
      return res.status(201).json({
        id: `${user.id}`,
        name: `${user.name}`,
      });
    // }
  }
  static async logInWithPassword(req, res) {
    try {
      if (!req.body.email || !req.body.password) {
        res
          .status(403)
          .json({ error: 'Please, enter your email and password' });
        return;
      }
      User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
          res.status(403).json({ error: 'Invalid email' });
          return;
        }
        bcrypt.compare(req.body.password, user.password).then((isMatch) => {
          if (isMatch) {
            const accessToken = jwt.sign(
              { id: user._id },
              process.env.ACCESS_TOKEN_SECRET,
              {
                expiresIn: 1200,
              }
            );
            const refreshToken = jwt.sign(
              { id: user._id },
              process.env.REFRESH_TOKEN_SECRET,
              {
                expiresIn: '7d',
              }
            );
            res.cookie('refreshToken', refreshToken, { httpOnly: true });
            res.setHeader('Authorization', `Bearer ${accessToken}`);
            const {password, ...userInfo} = user._doc
            res.status(200).send({
              accessToken,
              refreshToken,
              user: {...userInfo},
              // user: user._doc,
              // // user: user,
            });
          } else {
            res.status(403).json({ error: 'Invalid password' });
          }
        });
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(403);
    }
  }
  static async createPassword(req, res) {
    const {userId, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = User.findByIdAndUpdate(userId, {password: hashedPassword})
    res.status(200).json("Password created successful")
  }
  static async socialLogIn(req, res) {
    
  }

  static async logOut(req, res) {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const userId = req.userId;
    console.log('The userId is ' + userId);
    if (!userId) {
      res.status(401).send({ error: 'Unauthorized' });
      return;
    }

    jwt.sign(refreshToken, '', { expiresIn: 1 }, (error) => {
      if (error) {
        res.status(401).send({ error: 'not signed' });
        return;
      }
      res.status(204).send({ message: 'Logged Out' });
      res.clearCookies('refreshToken');
    });
  }

  static async resetPassword(req, res) {}
}

export default AuthController;
