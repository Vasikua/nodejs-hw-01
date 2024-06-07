import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";
export const getAllContacts = async () => {
    
    try {
        const data = await fs.readFile(PATH_DB, "utf-8"); 
        const storageContacts = JSON.parse(data);
        console.log(storageContacts);
    } catch (error) {
        console.error("somthihg went wrong", error);
    }
};

console.log(await getAllContacts());
        
