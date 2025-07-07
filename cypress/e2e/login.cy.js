describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('email'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('user_name'); //Ввели верный логин
        cy.get('#pass').type('user_password'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton >.exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
  });

  
   it('Верный логин и неверный пароль', function () {
        cy.visit('email'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('user_name'); //Ввели верный логин
        cy.get('#pass').type('user_password'); //Ввели неверный пароль
        cy.get('#loginButton').click(); //Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton >.exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
  });

  it('Проверка, что в логине есть @', function () {
        cy.visit('email'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('user_name'); //Ввели логин без @
        cy.get('#pass').type('user_password'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton >.exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
  });
   
    it('Проверка восстановления пароля', function () {
        cy.visit('email'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восст. пароль

        cy.get('#forgotEmailButton').click(); //Нажимаю Восстановить пароль
        cy.get('#mailForgot').type('user_name'); //Ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); //Нажал отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton >.exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
  });

  it('Неверный логин и верный пароль', function () {
        cy.visit('email'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('user_name'); //Ввели неверный логин
        cy.get('#pass').type('user_password'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton >.exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
  });
   

   it('Верный логин и верный пароль', function () {
        cy.visit('email'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('user_name'); //Ввели верный логин
        cy.get('#pass').type('user_password'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton >.exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
  });
})



//Найти поле логин и ввести правильный логин
//Найти поле пароль и ввести правильный пароль
//Найти кнопку войти и нажать на нее
//Проверить, что авторизация прошла успешно
