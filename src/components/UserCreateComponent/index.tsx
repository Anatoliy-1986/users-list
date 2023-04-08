import React from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./CreatePage.module.scss";

import { UserForm } from "../../components/Form/Form";
import { useCreateUsersMutation } from "../../store/users/users.api";
import { IUsers } from "../../store/users/users.type";
import { rolesOptions } from "../Form/dictionaries";

export const UserCreateComponent = () => {
  const [createUser] = useCreateUsersMutation();
  const navigate = useNavigate();

  const handleCreate = (user: IUsers) => {
    createUser(user);
    navigate("/");
    console.log("пользователь успешно добавлен");
  };

  const data = {
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    roles: [rolesOptions[0]],
    workBorders: [],
  };

  return (
    <section className={styles.root}>
      <Link to={`/`}>Вернуться к списку</Link>
      <UserForm initialValues={data} onCreate={handleCreate} />
    </section>
  );
};
