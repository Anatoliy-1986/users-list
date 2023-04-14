import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./CreatePage.module.scss";

import { UserForm } from "../../components/Form/Form";
import { IUsers } from "../../store/users/users.type";
import { rolesOptions } from "../Form/dictionaries";
import { useAppDispatch } from "../../hooks/redux";
import { fetchUsers, createUser } from "../../store/reducers/ActionCreator";

export const UserCreateComponent = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleCreate = (user: IUsers) => {
    dispatch(createUser(user));
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
