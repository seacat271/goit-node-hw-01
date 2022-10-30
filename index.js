const {   listContacts, getContactById, removeContact, addContact} = require("./contacts");

// addContact("Kirill", "seacat@mail.com", "04040004040");
// console.log(addContact("Kirill", "seacat@mail.com", "04040004040"))
// listContacts().then(data => console.log(data))
getContactById("4").then(data => console.log(data))
// removeContact("3").then(data => console.log(data))