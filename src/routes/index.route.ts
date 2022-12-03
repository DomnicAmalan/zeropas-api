import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import ContractController from '@/controllers/contract';

class IndexRoute implements Routes {
  public path = '/';
  public router = Router();
  private contractController = new ContractController()

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}mint`, this.contractController.mint);
  }
}

export default IndexRoute;
