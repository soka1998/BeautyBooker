import Staff from "../models/Staff.js"
import Service from "../models/Service.js";
import mongoose from "mongoose";



//Get all staff members 
export const getAllStaff = async (req, res) => {
    try {
        const staffMembers = await Staff.find({});
        res.status(200).json(staffMembers);

    } catch (error) {
        res.status(400).json({ error: err.message })

    }
};

//Get a single staff member by ID 
export const getStaffById = async (req, res) => {
    const { staffId } = req.params;
    try {
        const staffMember = await Staff.findById(staffId);
        if (!staffMember) {
            return res.status(404).json("No staff with this id")
        }
        res.status(200).json(staffMember);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Add new staff member 
export const addStaff = async (req, res) => {
    const { name, services, schedule, email, phone } = req.body;
    try {

        // Enhanced Validation: Check if service IDs are valid ObjectIds
        services.forEach(serviceId => {
            if (!mongoose.Types.ObjectId.isValid(serviceId)) {
                throw new Error(`Invalid service ID format: ${serviceId}`);
            }
        });
         // Validate service IDs: Check each ID to ensure the service exists
         const serviceValidationPromises = services.map(serviceId =>
            Service.findById(serviceId).then(service => {
                if (!service) {
                    throw new Error(`Service not found with ID: ${serviceId}`);
                }
            })
        );

        // Wait for all service ID validations to complete
        await Promise.all(serviceValidationPromises);
       
        const newStaff = await Staff.create({
            name,
            services,
            schedule,
            email,
            phone,
        })
        res.status(201).json({ message: "Staff added successfully!", staff: newStaff });



    } catch (error) {
        res.status(400).json({ error: error.message });

    }
};

//Update a staff member's schedule
export const updateStaffSchedule = async (req, res) => {
    const { staffId } = req.params;
    const { schedule } = req.body;
    try {
        const updatedStaff = await Staff.findByIdAndUpdate(staffId, { schedule }, { new: true });
        if (!updatedStaff) {
            return res.status(404).json({ message: "Staff not found" });

        }
        res.status(200).json({ message: "Staff not found" });

        res.status(200).json({ message: "Staff schedule updated successfully !", staff: updatedStaff });
    } catch (error) {
        res.status(400).json({ error: err.message })

    }
}

//Remove a staff memeber 
export const removeStaff = async (req, res) => {
    const { staffId } = req.params;
    try {
        const staffToDelete = await Staff.findByIdAndDelete(staffId);
        if (!staffToDelete) {
            return res.status(404).json({ message: "Staff is not found!" });
        }
        res.status(200).json('message- :"Staff removed successfully')
    } catch (error) {
        res.status(400).json({ error: err.message })

    }
};
