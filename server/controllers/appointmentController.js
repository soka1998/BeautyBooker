import Appointment from "../models/Appointment.js";
import Service from "../models/Service.js";
// Enhanced error handler for appointments
const handleErrors = (err) => {
    let errors = {};

    // Handle validation errors
    if (err.name === 'ValidationError') {
        for (const [key, value] of Object.entries(err.errors)) {
            errors[key] = value.message;
        }
    }
    
    // Handle duplicate field errors (if applicable)
    if (err.code === 11000) {
        errors[Object.keys(err.keyValue)[0]] = 'This field must be unique.';
    }
    
    // General error message as a fallback
    if (Object.keys(errors).length === 0) {
        errors.general = 'Something went wrong. Please try again.';
    }

    return errors;
};
// Book an appointment with updated logic for checking service availability
export const bookAppointment = async (req, res) => {
    const { date, time, userId, serviceId, staffId } = req.body;
    try {
        // Find the service by ID to check availability
        const service = await Service.findById(serviceId);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        // Check if the requested date and time slot is available
        const availability = service.availability.find(a => a.date.toISOString().split('T')[0] === new Date(date).toISOString().split('T')[0]);
        if (!availability || !availability.timeSlots.some(slot => slot.time === time && !slot.isBooked)) {
            return res.status(400).json({ message: "Requested time slot is not available" });
        }

        // Mark the time slot as booked
        const timeSlotIndex = availability.timeSlots.findIndex(slot => slot.time === time);
        availability.timeSlots[timeSlotIndex].isBooked = true;
        await service.save();

        // Proceed with creating the appointment
        const newAppointment = await Appointment.create({
            date,
            time,
            userId,
            serviceId,
            staffId,
            status: "Booked", // Assume initial status is "Booked"
        });

        res.status(201).json(newAppointment);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};
// Cancel an appointment
export const cancelAppointment = async (req, res) => {
    const { appointmentId } = req.params;
    try {
        const appointment = await Appointment.findByIdAndUpdate(appointmentId, { status: "Cancelled" }, { new: true });
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json(appointment);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

// Reschedule an appointment
export const rescheduleAppointment = async (req, res) => {
    const { appointmentId } = req.params;
    const { date, time } = req.body;
    try {
        const appointment = await Appointment.findByIdAndUpdate(appointmentId, { date, time }, { new: true });
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json(appointment);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};


// Get all appointments by a specific staff ID
export const getAppointmentsByStaffId = async (req, res) => {
    const { staffId } = req.params; // Assuming the staff ID is passed as a URL parameter
    try {
        const appointments = await Appointment.find({ staffId }); // Find appointments by staffId
        if (appointments.length === 0) {
            return res.status(404).json({ message: "No appointments found for this staff member." });
        }
        res.status(200).json(appointments);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};
