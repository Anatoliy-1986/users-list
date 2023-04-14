import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { UserItem } from "./components/UserItem";
import styles from "./UsersList.module.scss";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUsers } from "../../store/reducers/ActionCreator";

export const UserListComponent = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const [usersList, setUsersList] = useState(users);

  useEffect(() => {
    const newPacientes = users?.filter((value) =>
      value.firstName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setUsersList(newPacientes);
  }, [users, searchValue]);

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <form role="search">
          <input
            aria-label="Search contacts"
            placeholder="Поиск"
            type="search"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </form>
        <Link to={`contacts/create`}>
          <button className="btn btn-primary">Создать пользователя</button>
        </Link>
      </header>
      {isLoading ? (
        <div className={styles.loader} />
      ) : error ? (
        <div>Ошибка</div>
      ) : (
        <nav>
          <ul className={styles.list}>
            {usersList?.length ? (
              usersList.map((item) => {
                return <UserItem key={item.id} {...item} />;
              })
            ) : (
              <div>Поиск пуст</div>
            )}
          </ul>
        </nav>
      )}
    </section>
  );
};
