import express from 'express';
import { bookAppointment, cancelAppointment, rescheduleAppointment } from '../controllers/appointmentController.js';

const appointmentRoutes = express.Router()

appointmentRoutes.post('/',requireAuth ,bookAppointment)
appointmentRoutes.patch('/:appointmentId/cancel',cancelAppointment)
appointmentRoutes.patch('/:appointmentId/reschedule',rescheduleAppointment)

export default  appointmentRoutes;