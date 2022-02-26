import { Router } from "express";
import { CreateProductController } from "../../../useCases/createProduct/CreateProductController";
import { ListProductController } from "../../../useCases/listProducts/ListProductsController";

const productsRouter = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductController();

productsRouter.post("/", createProductController.handle);
productsRouter.get("/", listProductsController.handle);

export { productsRouter };