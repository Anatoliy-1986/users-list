import * as Yup from "yup";
import { Option } from "../../store/users/users.type";

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
  roles: Yup.mixed().test(
    "roles",
    "выбирите не менее одного варианта",
    (value) => {
      return !!value && (value as Option[]).length > 0;
    }
  ),
  workBorders: Yup.array()
    .min(1, "выбирите не менее одного варианта")
    .of(Yup.object().required())
    .required(),
});
