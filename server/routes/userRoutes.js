import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { Router } from "express";

const userRoutes = Router();


 userRoutes.post('/register',registerUser);
 userRoutes.post('/login',loginUser)


export default  userRoutes;