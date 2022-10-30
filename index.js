const {   listContacts, getContactById, removeContact, addContact} = require("./contacts");

// addContact("Kirill", "seacat@mail.com", "04040004040");
// console.log(addContact("Kirill", "seacat@mail.com", "04040004040"))

getContactById("3").then(data => data)