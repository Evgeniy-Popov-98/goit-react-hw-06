import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  name: "contact",
  initialState: INITAL_STATE,
  reducers: {
    addContact(state, action) {
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    deleteContact(state, action) {
      const contactIndex = state.contacts.items.findIndex(
        (contacts) => contacts.id === action.payload
      );
      state.contacts.items.splice(contactIndex, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
