const fs =  require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");
const testPath = path.resolve("./test/test.txt");
// console.log(contactsPath)


const data = fs.readFile(contactsPath, "utf-8");
        // await fs.writeFile(testPath, data, "utf-8")



async function listContacts  ()  {
    try {
        return await fs.readFile(contactsPath, "utf-8");
    } catch (error) {
        console.log(error)
  }

}
  
async  function getContactById(contactId) {
   try {
    return await fs.readFile(contactsPath, "utf-8").filter(item => item.id === contactId)
    } catch (error) {
        console.log(error)
    }
}
  
async  function removeContact(contactId) {
    try {
     const newData = await fs.readFile(contactsPath, "utf-8").filter(item => item.id !== contactId);
     await fs.writeFile(contactsPath, newData, "utf-8")
     return contactId
    } catch (error) {
        console.log(error)
    }
  }
  
async function addContact(name, email, phone) {
try {
    const id = data[data.length - 1].id + 1
return [...data, {id, name, email, phone }]
} catch (error) {
    console.log(error)
}
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}