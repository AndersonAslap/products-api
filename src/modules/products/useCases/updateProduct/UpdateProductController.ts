import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

class UpdateProductController {

    async handle(request: Request, response: Response) : Promise<Response> {
        const { id, name, description } = request.body;

        const updateProductUseCase = container.resolve(UpdateProductUseCase);
        const product = await updateProductUseCase.execute({ id, name, description });
        
        return response.json(product);
    }
}

export { UpdateProductController };