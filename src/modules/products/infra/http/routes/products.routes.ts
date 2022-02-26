import { Router } from "express";
import { CreateProductController } from "../../../useCases/createProduct/CreateProductController";

const productsRouter = Router();

const createProductController = new CreateProductController();

productsRouter.post("/", createProductController.handle);

export { productsRouter };