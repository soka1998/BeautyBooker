import express from "express";
import { addService, deleteService, getAllServices, getServiceById, updateService } from "../controllers/serviceController.js";

const serviceRoute= express.Router()

serviceRoute.get('/:serviceId',getServiceById)
serviceRoute.get('/',getAllServices)
serviceRoute.post('/',/*staffMiddlewrae*/ addService)
serviceRoute.put('/:serviceId',/*staffMiddlewrae*/ updateService)
serviceRoute.delete('/:serviceId',/*staffMiddlewrae*/ deleteService)


export default serviceRoute;