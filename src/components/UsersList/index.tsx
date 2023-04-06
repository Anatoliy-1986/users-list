import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import styles from "./UsersList.module.scss";

import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../store/users/users.api";
import { IUsers } from "../../store/users/users.type";

// const usersData = [
//   {
//     id: 1,
//     userName: "Alex",
//     firstName: "Алексей",
//     lastName: "Федотов",
//   },
//   {
//     id: 2,
//     userName: "Dian",
//     firstName: "Анна",
//     lastName: "Иванова",
//   },
//   {
//     id: 3,
//     userName: "John",
//     firstName: "Иван",
//     lastName: "Степанов",
//   },
// ];

export const UsersList = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, error } = useGetUsersQuery(3);

  const [users, setUsers] = useState(data);

  useEffect(() => {
    const newPacientes = data?.filter((value) =>
      value.firstName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setUsers(newPacientes);
  }, [data, searchValue]);

  return (
    <section className={styles.root}>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        <div>error</div>
      ) : (
        <>
          <header className={styles.header}>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <div id="search-spinner" aria-hidden hidden={true} />
            </form>
            <form method="post">
              <Link to={`contacts/newUser`}>
                <button className="btn btn-primary">Add new user</button>
              </Link>
            </form>
          </header>
          <nav>
            <ul className={styles.list}>
              {users?.length !== undefined && users.length > 0 ? (
                users.map((item) => {
                  return (
                    <Link to={`contacts/${item.id}`} key={item.id}>
                      <li>
                        <div className="card mb-3">
                          <div className="row g-0">
                            <div className={styles.imageWrapper}>
                              <img
                                width={100}
                                height={100}
                                src="/user.png"
                                alt="user image"
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-text">
                                  Username: {item.userName}
                                </h5>
                                <h5 className="card-text">
                                  First Name: {item.firstName}
                                </h5>
                                <h5 className="card-text">
                                  Last Name: {item.lastName}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>
                  );
                })
              ) : (
                <div>Поиск пуст</div>
              )}
            </ul>
          </nav>
        </>
      )}
    </section>
  );
};
