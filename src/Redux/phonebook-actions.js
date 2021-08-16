import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("phonebook/add", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction("phonebook/delete");
const changeFilter = createAction("phonebook/changeFilter");

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
