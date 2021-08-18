export function Validation(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Введите правильно имя!";
  }
  if (!values.mail) {
    errors.mail = "Введите правильно Email!";
  } else if (!/\S+@\S+\.\S+/.test(values.mail)) {
    errors.mail = "Введите правильно Email!";
  }
  if (!values.pasword) {
    errors.pasword = "Введите правильно пароль!";
  } else if (values.pasword.length < 7) {
    errors.pasword = "Пароль должен иметь более 7 символов!";
  }
  if (values.area.length > 150) {
    errors.area = "Введите описание короче!";
  }
  return errors;
}
