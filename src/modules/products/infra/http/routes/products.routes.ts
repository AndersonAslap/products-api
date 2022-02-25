import { Router } from "express";
import { CreateProductController } from "../controllers/CreateProductController";


const productsRouter = Router();

const createProductController = new CreateProductController();

productsRouter.post("/", createProductController.handle);

export { productsRouter };