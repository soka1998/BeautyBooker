import express from 'express';
import { bookAppointment, cancelAppointment, getAppointmentsByStaffId, rescheduleAppointment } from '../controllers/appointmentController.js';
import requireAuth from '../middleware/authMiddleware.js';

const appointmentRoutes = express.Router()


appointmentRoutes.get('/staff/:staffId', requireAuth, getAppointmentsByStaffId);

appointmentRoutes.post('/book' ,bookAppointment)
appointmentRoutes.patch('/:appointmentId/cancel',cancelAppointment)
appointmentRoutes.patch('/:appointmentId/reschedule',rescheduleAppointment)

export default  appointmentRoutes;
