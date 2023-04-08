import React from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import styles from "./UpdatePage.module.scss";

import { UserForm } from "../../components/Form/Form";

import {
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUsersMutation,
} from "../../store/users/users.api";
import { IUsers } from "../../store/users/users.type";

export const UserUpdateComponent = () => {
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUsersMutation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useGetUserQuery(String(id));

  const handleRemove = () => {
    deleteUser(String(id));
    navigate("/");
  };

  const handleUpdate = (user: IUsers) => {
    updateUser(user);
    navigate("/");
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
