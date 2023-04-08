import { IUsers } from "../store/users/users.type";

export interface IForm {
  initialValues: IUsers;
  onCreate?: (params: IUsers) => void;
  onRemove?: () => void;
  onUpdate?: (params: IUsers) => void;
}
