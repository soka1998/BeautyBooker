import Appointment from "../models/Appointment.js";
import Service from "../models/Service.js";
import Staff from "../models/Staff.js";
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
// Book an appointment with updated logic for checking staff availability
export const bookAppointment = async (req, res) => {
    const { date, time, userId, serviceId, staffId } = req.body;
    try {
        // Find the staff by ID to check availability
        const staff = await Staff.findById(staffId);
        if (!staff) {
            return res.status(404).json({ message: "Staff not found" });
        }

      // Check if there's an existing appointment with the same staff, date, and time
      const existingAppointment = await Appointment.findOne({
        staffId,
        date,
        time,
        status: { $ne: "Cancelled" } // Optionally ignore cancelled appointments
    });

    if (existingAppointment) {
        // If an appointment exists, return an error message
        return res.status(400).json({ message: "The selected time slot is already booked with this staff member." });
    }

    // If no existing appointment is found, proceed to create the new appointment
    const newAppointment = new Appointment({
        date,
        time,
        userId,
        serviceId,
        staffId,
        status: "booked"
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!", appointment: newAppointment });
} catch (err) {
    console.log(err)
    res.status(400).json({ error: "An error occurred while booking the appointment." });
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
