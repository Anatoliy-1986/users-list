import React from "react";

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
      <ul className={styles.list}>
        {usersData.map((item) => {
          return (
            <li key={item.id}>
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
                      <h5 className="card-text">Username: {item.userName}</h5>
                      <h5 className="card-text">
                        First Name: {item.firstName}
                      </h5>
                      <h5 className="card-text">Last Name: {item.lastName}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="btn btn-primary">Добавить пользователя</button>
    </section>
  );
};
