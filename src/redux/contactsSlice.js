import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { items: [] };

const contactsSlice = createSlice({
  name: "contact",
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteContact(state, action) {
      const contactIndex = state.items.findIndex(
        (contacts) => contacts.id === action.payload
      );
      state.contacts.items.splice(contactIndex, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
