import React from "react";

import { Link } from "react-router-dom";

import styles from "./UsersList.module.scss";

const usersData = [
  {
    id: 1,
    userName: "Alex",
    firstName: "Алексей",
    lastName: "Федотов",
  },
  {
    id: 2,
    userName: "Dian",
    firstName: "Анна",
    lastName: "Иванова",
  },
  {
    id: 3,
    userName: "John",
    firstName: "Иван",
    lastName: "Степанов",
  },
];

export const UsersList = () => {
  return (
    <section className={styles.root}>
      <form id="search-form" role="search">
        <input
          id="q"
          aria-label="Search contacts"
          placeholder="Search"
          type="search"
          name="q"
        />
        <div id="search-spinner" aria-hidden hidden={true} />
        {/*<div className="sr-only" aria-live="polite"></div>*/}
      </form>
      <form method="post">
        <Link to={`contacts/`}>
          <button className="btn btn-primary mb-3">
            Добавить пользователя
          </button>
        </Link>
      </form>
      <nav>
        <ul className={styles.list}>
          {usersData.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`contacts/${item.id}`}>
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
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
