import React, { Fragment, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import styles from "./UpdatePage.module.scss";

import { UserForm } from "../../components/Form/Form";

import { IUsers } from "../../store/users/users.type";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  getUserById,
  removeUser,
  updateUser,
} from "../../store/reducers/ActionCreator";

export const UserUpdateComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUserById(String(id)));
  }, []);

  const handleRemove = () => {
    dispatch(removeUser(String(id)));
    navigate("/");
  };

  const handleUpdate = (user: IUsers) => {
    dispatch(updateUser(user));
    navigate("/");
    console.log("пользователь успешно обновлен");
  };

  return (
    <section className={styles.root}>
      <Link to={`/`}>Вернуться к списку</Link>
      {user ? (
        <UserForm
          initialValues={user}
          onRemove={handleRemove}
          onUpdate={handleUpdate}
        />
      ) : (
        <Fragment />
      )}
    </section>
  );
};
