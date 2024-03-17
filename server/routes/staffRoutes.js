import express from 'express';
import { addStaff, getAllStaff, getStaffById, removeStaff, updateStaffSchedule } from '../controllers/staffController.js';


const staffRoutes = express.Router();



staffRoutes.get('/', getAllStaff);
staffRoutes.get('/:staffId', getStaffById);
staffRoutes.post('/', addStaff);
staffRoutes.put('/:staffId/schedule', updateStaffSchedule);
staffRoutes.delete('/:staffId', removeStaff);



export default staffRoutes; 