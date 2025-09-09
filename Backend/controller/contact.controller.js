import Contact from "../model/contact.model.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({
      name: name,
      email: email,
      message: message,
    });
    console.log(newContact);
    await newContact.save();
    res.status(201).json({
      message: "Message successfully sended",
      contact: {
        name: newContact.name,
        email: newContact.email,
        message: newContact.message,
      },
    });
  } catch (error) {
    console.error("Error:", +error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
