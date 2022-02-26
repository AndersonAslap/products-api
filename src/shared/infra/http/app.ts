import 'reflect-metadata';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from '../../../swagger.json';
import express from "express";
import '../../../database';
import '../../container';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(routes);

export { app };