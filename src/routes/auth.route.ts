import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import passport from 'passport'

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
    this.router.get(
      '/google/callback',
      passport.authenticate('google', { failureRedirect: '/' }),
      (req, res) => {
        res.redirect('/log')
      }
    )
    this.router.get('/logout', (req, res) => {
      // req.logout()
      // res.redirect('/')
    })
    
  }
}

export default AuthRoute;
