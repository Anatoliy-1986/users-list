import React from "react";
import { Formik, Form, Field } from "formik";
import { SignupSchema } from "./schemsValidation";
import { IUsers } from "../../store/users/users.type";
import Multiselect from "multiselect-react-dropdown";
import { optionList, roleList } from "./dictionaries";
import styles from "./Form.module.scss";

interface IForm {
  initialValues: IUsers;
  onCreate?: (params: IUsers) => void;
  onRemove?: () => void;
  onUpdate?: (params: IUsers) => void;
}

export const UserForm = ({
  initialValues,
  onCreate,
  onRemove,
  onUpdate,
}: IForm) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          !!onCreate && onCreate(values);
          !!onUpdate && onUpdate(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.inputsWrapper}>
              <label className={styles.label}>
                Логин
                <Field name="userName" />
              </label>
              {errors.userName && touched.userName ? (
                <div className={styles.error}>{errors.userName}</div>
              ) : null}

              <label className={styles.label}>
                Имя
                <Field name="firstName" />
              </label>
              {errors.firstName && touched.firstName ? (
                <div className={styles.error}>{errors.firstName}</div>
              ) : null}

              <label className={styles.label}>
                Фамилия
                <Field name="lastName" />
              </label>
              {errors.lastName && touched.lastName ? (
                <div className={styles.error}>{errors.lastName}</div>
              ) : null}

              <label className={styles.label}>
                Пароль
                <Field name="password" />
              </label>
              {errors.password && touched.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}
            </div>
            <Multiselect
              options={roleList.options}
              selectedValues={roleList.selectedValue}
              displayValue="name"
              placeholder="Role"
              style={{
                multiselectContainer: {
                  background: "white",
                  marginBottom: "16px",
                  marginTop: "16px",
                },
              }}
            />
            <Multiselect
              options={optionList.options}
              displayValue="name"
              placeholder="Work Borders"
              style={{
                multiselectContainer: {
                  background: "white",
                  marginBottom: "16px",
                },
              }}
            />
            <div className={styles.buttonsWrapper}>
              <button type="submit" className="btn btn-primary">
                {onUpdate
                  ? "Обновить информацию о пользователе"
                  : "Создать пользователя"}
              </button>
              {!!onRemove && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onRemove()}
                >
                  Удалить пользователя
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
