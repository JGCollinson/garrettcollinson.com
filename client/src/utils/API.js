import axios from "axios";

export default {
  // Gets all Contacts
  getContacts: function() {
    return axios.get("/api/Contacts");
  },
  // Gets the Contact with the given id
  getContact: function(id) {
    return axios.get("/api/Contacts/" + id);
  },
  // Deletes the Contact with the given id
  deleteContact: function(id) {
    return axios.delete("/api/Contacts/" + id);
  },
  // Saves a Contact to the database
  saveContact: function(ContactData) {
    return axios.post("/api/Contacts", ContactData);
  }
};
