import express from 'express';
import { addStaff, getAllStaff, getStaffById, removeStaff, updateStaffSchedule } from '../controllers/staffController.js';
import requireAuth from '../middleware/authMiddleware.js';
import requireAdmin from '../middleware/adminMiddleware.js';
import requireStaff from '../middleware/staffMiddleware.js';

const staffRoutes = express.Router();



staffRoutes.get('/',requireStaff,requireAuth, getAllStaff);
staffRoutes.get('/:staffId', removeStaff,requireAuth,getStaffById);
staffRoutes.post('/', requireAuth ,requireAdmin,addStaff);
staffRoutes.put('/:staffId',requireAuth ,requireAdmin, updateStaffSchedule);
staffRoutes.delete('/:staffId', requireAuth ,requireAdmin,removeStaff);



export default staffRoutes; 