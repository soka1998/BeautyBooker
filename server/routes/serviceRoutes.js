import express from "express";
import { addService, deleteService, getAllServices, getServiceById, updateService } from "../controllers/serviceController.js";
import requireAdmin from "../middleware/adminMiddleware.js";

const serviceRoute= express.Router()

serviceRoute.get('/:serviceId',getServiceById)
serviceRoute.get('/',getAllServices)
serviceRoute.post('/',requireAdmin,/*staffMiddlewrae*/ addService)
serviceRoute.put('/:serviceId',requireAdmin,/*staffMiddlewrae*/ updateService)
serviceRoute.delete('/:serviceId',requireAdmin,/*staffMiddlewrae*/ deleteService)


export default serviceRoute;