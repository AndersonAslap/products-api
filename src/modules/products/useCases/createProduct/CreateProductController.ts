import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductService } from "./CreateProductService";

class CreateProductController {

    async handle(request: Request, response: Response) : Promise<Response> {
        const { name, description } = request.body;

        const createProductService = container.resolve(CreateProductService);

        const product = await createProductService.execute({name, description});

        return response.json(product);
    }
}

export { CreateProductController };