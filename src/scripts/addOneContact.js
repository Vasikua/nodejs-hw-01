import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    try {
    
    const contacts = []; 
    contacts.push(createFakeContact());
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log("one contact was added");
} catch (error) {
        console.error("somthing went wrong", error);
    }
    
};

await addOneContact();
