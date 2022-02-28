import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { app } from "../../../../shared/infra/http/app";
import { productOne } from "../../mocks/productMock";

let connection : Connection;
let productId : string;

describe("Delete Product Test Integration", () => {

    beforeAll(async() => {
        connection = await createConnection();
        await connection.runMigrations();

        const { body } = await request(app).post("/products").send({
            name: productOne.name,
            description: productOne.description
        });

        productId = body.id;
    });

    afterAll(async() => {
        await connection.dropDatabase();
        await connection.close();
    });

    it("should be able delete a product", async() => {
        await request(app).delete("/products").send({
            id: productId
        });

        const { body } = await request(app).get("/products");

        expect(body).toHaveLength(0);
    });
});