import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { app } from "../../../../shared/infra/http/app";
import { productOne, productTwo } from "../../mocks/productMock";

let connection : Connection;
let productId : string;

describe("Update Product Test Integration", () => {

    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();

        const { body } = await request(app).post("/products").send({
            name: productOne.name,
            description: productOne.description
        });

        productId = body.id;
    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    });

    it("should be able updated a product", async() => {
        const { body } = await request(app).put("/products").send({
            id: productId,
            name: productTwo.name,
            description: productTwo.description
        }); 

        expect(body.name).toBe(productTwo.name);
    });
});