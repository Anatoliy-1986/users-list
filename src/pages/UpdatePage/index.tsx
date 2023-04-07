import React from "react";

import { Link, useParams } from "react-router-dom";

import styles from "./UpdatePage.module.scss";

import { UserForm } from "../../components/Form/Form";

import {
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUsersMutation,
} from "../../store/users/users.api";
import { IUsers } from "../../store/users/users.type";

export const UpdatePage = () => {
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUsersMutation();

  const { id } = useParams();

  const { data } = useGetUserQuery(String(id));

  const handleRemove = () => {
    deleteUser(String(id));
  };

  const handleUpdate = (user: IUsers) => {
    updateUser(user);
  };

  return (
    <section className={styles.root}>
      <Link to={`/`}>Вернуться к списку</Link>
      <UserForm
        initialValues={data!}
        onRemove={handleRemove}
        onUpdate={handleUpdate}
      />
    </section>
  );
};
