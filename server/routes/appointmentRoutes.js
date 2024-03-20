import express from 'express';
import { bookAppointment, cancelAppointment, getAppointmentsByStaffId, rescheduleAppointment } from '../controllers/appointmentController.js';
import requireAuth from '../middleware/authMiddleware.js';

const appointmentRoutes = express.Router()


appointmentRoutes.get('/staff/:staffId', requireAuth, getAppointmentsByStaffId);

appointmentRoutes.post('/',requireAuth ,bookAppointment)
appointmentRoutes.patch('/:appointmentId/cancel',requireAuth,cancelAppointment)
appointmentRoutes.patch('/:appointmentId/reschedule',requireAuth,rescheduleAppointment)

export default  appointmentRoutes;
