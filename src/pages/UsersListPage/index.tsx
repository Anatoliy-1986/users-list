import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { UserItem } from "./components/UserItem";
import styles from "./UsersList.module.scss";

import { useGetUsersQuery } from "../../store/users/users.api";

export const UsersList = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, error } = useGetUsersQuery();

  const [users, setUsers] = useState(data);

  useEffect(() => {
    const newPacientes = data?.filter((value) =>
      value.firstName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setUsers(newPacientes);
  }, [data, searchValue]);

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Поиск"
            type="search"
            name="q"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </form>
        <Link to={`contacts/create`}>
          <button className="btn btn-primary">Создать пользователя</button>
        </Link>
      </header>
      {isLoading ? (
        <div className={styles.loader}>Loading...</div>
      ) : error ? (
        <div>Ошибка</div>
      ) : (
        <nav>
          <ul className={styles.list}>
            {users?.length ? (
              users.map((item) => {
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
