/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    let isThis = this;
    User.register(
      data,
      function (err, response) {
        if (err === null && response.success) {
          User.setCurrent(response.user);
          App.setState('user-logged');
          App.getModal('register').close();
          
          isThis.element.reset();
        } 
      }
    )
  }
}