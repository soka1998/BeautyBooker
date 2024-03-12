import express from "express";
import { registerUser } from "../controllers/userController.js";
import { Router } from "express";

const userRoutes = Router();


 userRoutes.post('/register',registerUser);


export default  userRoutes;