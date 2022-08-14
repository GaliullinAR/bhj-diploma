/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    let isThis = this;
    User.login(data, function callback(err, response) {
      if (err === null && response.success) {
        User.setCurrent(response.user)
        App.setState("user-logged");
        App.getModal("login").close();
        isThis.element.reset();
      } else {
        console.log(response.error);
      }
    });
  }
}