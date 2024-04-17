import { useSelector } from "react-redux";
import { useMemo } from "react";

import Contact from "../Contact/Contact";

import clsx from "clsx";
import css from "./ContactLict.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contact.contacts.items);
  const selectNameFilter = useSelector((state) => state.filter.filters.name);

  console.log(selectNameFilter);

  const filteredContacts = useMemo(
    () =>
      selectContacts.filter((contact) => {
        return contact.name
          .toLowerCase()
          .includes(selectNameFilter.toLowerCase());
      }),
    [selectNameFilter, selectContacts]
  );

  return (
    <ul className={clsx(css.contactsList)}>
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
