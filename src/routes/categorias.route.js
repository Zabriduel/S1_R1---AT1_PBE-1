import { Router } from "express";
import categoriasController from "../controllers/categorias.controller.js";

const categoriasRoutes = Router();

categoriasRoutes.get('/categorias', categoriasController.selectTodos);
categoriasRoutes.post('/categorias',categoriasController.incluiCategorias);

export default categoriasRoutes;

