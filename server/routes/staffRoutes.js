import express from 'express';
import { addStaff, getAllStaff, getStaffById, removeStaff, updateStaffSchedule } from '../controllers/staffController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const staffRoutes = express.Router();



staffRoutes.get('/',authMiddleware, getAllStaff);
staffRoutes.get('/:staffId',authMiddleware, getStaffById);
staffRoutes.post('/',authMiddleware, addStaff);
staffRoutes.put('/:staffId/schedule',authMiddleware, updateStaffSchedule);
staffRoutes.delete('/:staffId', authMiddleware,removeStaff);



export default staffRoutes; 