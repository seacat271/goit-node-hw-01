const fs =  require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");
const testPath = path.resolve("./test/test.txt");
// console.log(contactsPath)
const data = (path) => fs.readFile(path, "utf-8");
// await fs.writeFile(testPath, data, "utf-8")



async function listContacts  ()  {
    try {
        return await data(contactsPath);
    } catch (error) {
        console.log(error)
  }

}
  
async  function getContactById(contactId) {
   try {
    return await data(contactsPath).filter(item => item.id === contactId)
    } catch (error) {
        console.log(error)
    }
}
  
async  function removeContact(contactId) {
    try {
     const newData = await data(contactsPath).filter(item => item.id !== contactId);
     await fs.writeFile(contactsPath, newData, "utf-8")
     return contactId
    } catch (error) {
        console.log(error)
    }
  }
  
async function addContact(name, email, phone) {
try {
    const contacts = await data(contactsPath);
    const id = contacts[contacts.length - 1].id + 1
    const newData = [...contacts, {id, name, email, phone }]
    await fs.writeFile(contactsPath, newData, "utf-8")
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