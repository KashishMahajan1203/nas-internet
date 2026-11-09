import express from "express";

import {
  createContact,
  getAllContacts,
  getContactById,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

// Create new contact
router.post("/", createContact);

// Get all contacts
router.get("/", getAllContacts);

// Get single contact
router.get("/:id", getContactById);

// Delete contact
router.delete("/:id", deleteContact);

export default router;