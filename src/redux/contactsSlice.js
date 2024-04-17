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
      state.contacts = [...state.users, action.payload];
    },
    deleteContact(state, action) {
      const contactIndex = state.contacts.findIndex(
        (contacts) => contacts.id === action.payload
      );
      state.users.splice(contactIndex, 1);
    },
    // setFilter(state, action) {
    //   state.filter = action.payload;
    // },
  },
});

export const { addUser, deleteUser, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
