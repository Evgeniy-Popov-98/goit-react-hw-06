import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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
    // setFilter(state, action) {
    //   state.filter = action.payload;
    // },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
