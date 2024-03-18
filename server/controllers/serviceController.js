import Service from "../models/Service.js";

// Add a new service
export const addService = async (req, res) => {
    const { name, description, duration, price } = req.body;
    try {
        const newService = new Service({
            name,
            description,
            duration,
            price,
        });
        await newService.save();
        res.status(201).json({ message: "Service added successfully!", service: newService });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all services
export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find({});
        res.status(200).json(services);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single service by ID
export const getServiceById = async (req, res) => {
    const { serviceId } = req.params;
    try {
        const service = await Service.findById(serviceId);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.status(200).json(service);
    } catch (err) {
        res.status(400).json({ error: 'Error fetching service: ' + err.message });
    }
};


// Update an existing service
export const updateService = async (req, res) => {
    const { serviceId } = req.params;
    const { name, description, duration, price } = req.body;
    try {
        const updatedService = await Service.findByIdAndUpdate(serviceId, {
            name,
            description,
            duration,
            price,
        }, { new: true });
        if (!updatedService) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.status(200).json({ message: "Service updated successfully!", service: updatedService });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a service
export const deleteService = async (req, res) => {
    const { serviceId } = req.params;
    try {
        const serviceToDelete = await Service.findByIdAndDelete(serviceId);
        if (!serviceToDelete) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.status(200).json({ message: "Service deleted successfully!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


//Final Notes
// This controller assumes you have a working Mongoose model for your services (Service.js)
//  and that your staff authentication and authorization logic
// is in place to protect these endpoints. Adjust the error handling and functionality
// according to your specific project requirements and security practices.