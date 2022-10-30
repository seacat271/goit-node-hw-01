const argv = require("yargs").argv;
const {   listContacts, getContactById, removeContact, addContact} = require("./contacts");

// console.log(argv)

// listContacts().then(data => console.log(data))
// getContactById("4").then(data => console.log(data))
// removeContact("5").then(data => console.log(data))
// addContact("Kirill", "seacat@mail.com", "04040004040").then(data => console.log(data))

function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case "list":
        listContacts()
        break;
  
      case "get":
        getContactById(id)
        break;
  
      case "add":
        addContact(name, email, phone)
        break;
  
      case "remove":
        removeContact(id)
        break;
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }

  invokeAction(argv);