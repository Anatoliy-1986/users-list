import { Link } from "react-router-dom";
import styles from "./UserItem.module.scss";
import React from "react";
import { IUsers } from "../../../store/users/users.type";

export const UserItem = (user: IUsers) => {
  return (
    <>
      <Link to={`contacts/${user.id}`} key={user.id} className={styles.link}>
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
                  <h5 className="card-text">Логин: {user.userName}</h5>
                  <h5 className="card-text">Имя: {user.firstName}</h5>
                  <h5 className="card-text">Фамилия: {user.lastName}</h5>
                </div>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
};
