const fs =  require("fs").promises;
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

const dataGet = async path => {
    return JSON.parse(await fs.readFile(path, "utf-8"))
};
const dataChange = async (path, newData) => {
    return await fs.writeFile(path, JSON.stringify(newData), "utf-8")
}

// async function listContacts()  {
//     try {
//          return await dataGet(contactsPath);
//     } catch (error) {
//         console.log(error)
//   }
// }

async function getContactById(contactId) {
   try {
    const contacts = await dataGet(contactsPath)
   return contacts.filter(item => item.id === (contactId + ""))
    } catch (error) {
        console.log(error)
    }
}
  
async function removeContact(contactId) {
    try {
        const contacts = await dataGet(contactsPath);
        const newData = contacts.filter(item => item.id !== (contactId + ""));
        await dataChange(contactsPath, newData)
        return contactId
    } catch (error) {
        console.log(error)
    }
  }
  
async function addContact(name, email, phone) {
try {
    const contacts = await dataGet(contactsPath);
    const id = +contacts[contacts.length - 1].id + 1 + "";
    const newData = [...contacts, {id, name, email, phone }]
    await dataChange(contactsPath, newData)
    return id;
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