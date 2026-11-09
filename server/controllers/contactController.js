
import Contact from "../models/Contact.js";

// Create Contact
export const createContact = async (req, res) => {
  try {
    const {
      fullname,
      email,
      phone,
      subject,
      message,
    } = req.body;

    // Required field validation
    if (!fullname || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Save data in MongoDB
    const newContact = await Contact.create({
      fullname,
      email,
      phone,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your inquiry has been submitted successfully!",
      data: newContact,
    });

  } catch (error) {
    console.error("Contact Form Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get All Contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: contacts.length,
      data: contacts,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch contacts",
    });
  }
};

// Get Single Contact
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid contact ID",
    });
  }
};

// Delete Contact
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to delete contact",
    });
  }
};
