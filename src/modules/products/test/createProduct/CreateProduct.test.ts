import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { app } from "../../../../shared/infra/http/app";
import { productOne } from "../../mocks/productMock";

let connection : Connection;

describe("Create Product Test Integration", () => {

    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    });

    it("should be able create a new product", async () => {
        const { body } = await request(app).post("/products").send({
            name: productOne.name,
            description: productOne.description
        });

        expect(body).toHaveProperty("id");
    });

});