import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { app } from "../../../../shared/infra/http/app";
import { productOne } from "../../mocks/productMock";

let connection : Connection;

describe("List All Products Test Integration", () => {

    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();

        await request(app).post("/products").send({
            name: productOne.name,
            description: productOne.description
        });
    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    });

    it("should be able lis all products", async () => {
        const { body } = await request(app).get("/products");
    
        expect(body).toHaveLength(1);
    });

});