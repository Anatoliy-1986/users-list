import React from "react";

import { Link } from "react-router-dom";

import styles from "./CreatePage.module.scss";

import { UserForm } from "../../components/Form/Form";
import { useCreateUsersMutation } from "../../store/users/users.api";
import { IUsers } from "../../store/users/users.type";

export const CreatePage = () => {
  const [createUser] = useCreateUsersMutation();

  const handleCreate = (user: IUsers) => {
    createUser(user);
  };

  const data = {
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    roles: [],
    workBorders: [],
  };

  return (
    <section className={styles.root}>
      <Link to={`/`}>Вернуться к списку</Link>
      <UserForm initialValues={data} onCreate={handleCreate} />
    </section>
  );
};
