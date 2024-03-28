import express from "express";
import { addService, addServiceAvailability, deleteService, getAllServices, getServiceById, updateService } from "../controllers/serviceController.js";
import requireAdmin from "../middleware/adminMiddleware.js";
import requireStaff from '../middleware/staffMiddleware.js';
import requireAuth from "../middleware/authMiddleware.js";

const serviceRoute= express.Router()

serviceRoute.get('/:serviceId',requireStaff,requireAuth,getServiceById)
serviceRoute.get('/',requireStaff,requireAuth,getAllServices)
serviceRoute.post('/',requireAdmin,requireStaff, addService)
serviceRoute.put('/:serviceId',requireAdmin,requireStaff, updateService)
serviceRoute.delete('/:serviceId',requireAdmin,requireStaff, deleteService)
serviceRoute.post('/services/:serviceId/availability',addServiceAvailability)

export default serviceRoute;