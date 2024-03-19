import Appointment from "../models/Appointment.js";

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

// Book an appointment
export const bookAppointment = async (req, res) => {
    const { date, time, userId, serviceId, staffId } = req.body;
    try {
        const newAppointment = await Appointment.create({
            date,
            time,
            userId,
            serviceId,
            staffId,
            status: "Booked", // Assume initial status is always "Booked"
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
