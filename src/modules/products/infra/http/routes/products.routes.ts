import { Router } from "express";
import { CreateProductController } from "../../../useCases/createProduct/CreateProductController";
import { DeleteProductController } from "../../../useCases/deleteProduct/DeleteProductController";
import { ListProductController } from "../../../useCases/listProducts/ListProductsController";

const productsRouter = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductController();
const deleteProductController = new DeleteProductController();

productsRouter.post("/", createProductController.handle);
productsRouter.get("/", listProductsController.handle);
productsRouter.delete("/", deleteProductController.handle);

export { productsRouter };