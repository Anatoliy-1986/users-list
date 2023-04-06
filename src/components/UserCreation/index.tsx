import React from "react";

import Multiselect from "multiselect-react-dropdown";

import styles from "./UserCreation.module.scss";
import { Link } from "react-router-dom";

const optionList = {
  options: [
    { id: "1", name: "Белгатой" },
    { id: "2", name: "Шали" },
    { id: "3", name: "Урус-Мартан" },
  ],
};

const roleList = {
  options: [
    { value: "ANT", name: "Рабочий" },
    { value: "ANT_MANAGER", name: "Менеджер" },
    { value: "ANT_OFFICER", name: "Офицер" },
    { value: "DEVELOPER", name: "Разаработчик" },
  ],
  selectedValue: [{ value: "ANT", name: "Рабочий" }],
};

export const UserCreation = () => {
  return (
    <section className={styles.root}>
      <Link to={`/`}>Back to users list</Link>
      <form className={styles.inputWrapper} method="post">
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            aria-label="Username"
            id="Username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="FirstName" className="form-label">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
            aria-label="First Name"
            id="FirstName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="LastName" className="form-label">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            aria-label="Last Name"
            id="LastName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="InputPassword" />
        </div>

        <Multiselect
          options={roleList.options}
          selectedValues={roleList.selectedValue}
          displayValue="name"
          placeholder="Role"
          style={{
            multiselectContainer: {
              background: "white",
              marginBottom: "16px",
            },
          }}
        />
        <Multiselect
          options={optionList.options}
          displayValue="name"
          placeholder="Work Borders"
          style={{
            multiselectContainer: {
              background: "white",
              marginBottom: "16px",
            },
          }}
        />
        <button type="submit" className="btn btn-primary">
          Создать пользователя
        </button>
      </form>
    </section>
  );
};
