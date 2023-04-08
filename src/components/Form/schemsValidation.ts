import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "не менее 3-х символов")
    .max(50, "Too Long!")
    .required("Введите логин"),
  firstName: Yup.string()
    .min(2, "не менее 2-х символов")
    .max(50, "Too Long!")
    .required("Введите имя"),
  password: Yup.string()
    .min(4, "не менее 4-х символов")
    .max(50, "Too Long!")
    .required("Введите пароль"),
});
