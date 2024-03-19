import express from 'express';
import { addStaff, getAllStaff, getStaffById, removeStaff, updateStaffSchedule } from '../controllers/staffController.js';
import requireAuth from '../middleware/authMiddleware.js';

const staffRoutes = express.Router();



staffRoutes.get('/', getAllStaff);
staffRoutes.get('/:staffId', getStaffById);
staffRoutes.post('/', requireAuth ,addStaff);
staffRoutes.put('/:staffId',requireAuth , updateStaffSchedule);
staffRoutes.delete('/:staffId', requireAuth ,removeStaff);



export default staffRoutes; 