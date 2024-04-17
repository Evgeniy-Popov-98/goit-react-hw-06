import { useSelector } from "react-redux";
// import { useMemo } from "react";

import Contact from "../Contact/Contact";

import clsx from "clsx";
import css from "./ContactLict.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contact.contacts.items);

  console.log(selectContacts);

  return (
    <ul className={clsx(css.contactsList)}>
      {Array.isArray(selectContacts) &&
        selectContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
