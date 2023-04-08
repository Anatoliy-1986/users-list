import React from "react";
import { Formik, Form, Field } from "formik";
import { SignupSchema } from "./schemsValidation";
import Multiselect from "multiselect-react-dropdown";
import { defaultValue, rolesOptions, workBordersOptions } from "./dictionaries";
import styles from "./Form.module.scss";
import { IForm } from "../types";

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
          !!onCreate && onCreate(values);
          !!onUpdate && onUpdate(values);
        }}
      >
        {({ errors, touched, setFieldValue, values }) => (
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
              options={rolesOptions}
              selectedValues={values.roles.length ? values.roles : defaultValue}
              onSelect={(selectedList) => {
                setFieldValue("roles", selectedList);
              }}
              onRemove={(selectedList) => {
                setFieldValue("roles", selectedList);
              }}
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
            {errors.roles && touched.roles ? (
              <div className={styles.error}>{String(errors.roles)}</div>
            ) : null}
            <Multiselect
              options={workBordersOptions}
              selectedValues={values.workBorders.length && values.workBorders}
              onSelect={(selectedList) => {
                setFieldValue("workBorders", selectedList);
              }}
              onRemove={(selectedList) => {
                setFieldValue("workBorders", selectedList);
              }}
              displayValue="name"
              placeholder="Work Borders"
              style={{
                multiselectContainer: {
                  background: "white",
                  marginBottom: "16px",
                },
              }}
            />
            {errors.workBorders && touched.workBorders ? (
              <div className={styles.error}>{String(errors.workBorders)}</div>
            ) : null}
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
