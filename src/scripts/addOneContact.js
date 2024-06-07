import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    try {
    
    const contacts = []; 
        contacts.push(createFakeContact());
        const data = await fs.readFile(PATH_DB, "utf-8");
        const storageContacts = JSON.parse(data);
        const addedOneContact = [...storageContacts, ...contacts];
        await fs.writeFile(PATH_DB, JSON.stringify(addedOneContact));
        console.log("one contact was added");
} catch (error) {
        console.error("somthing went wrong", error);
    }
    
};

await addOneContact();
