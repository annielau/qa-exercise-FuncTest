var assert = require ('assert');
var AuthPage = require ('../pageobjects/auth.page');

describe ('it should log in the page', function(){
	it ('should open the Mural site', function(){
		browser.url('/');
		AuthPage.verifyGreetingMessage();

	});

	it ('should correctly log in with facebook account', function(){
		browser.url ('/');
		AuthPage.loginWithFacebookButton.click();

		AuthPage.emailField.setValue('anatestinguser@gmail.com');
		AuthPage.passField.setValue('anatestinguser123');
		AuthPage.loginButton.click();
		AuthPage.verifyLoggedMessage();

	})

	it ('should correctly display First and Last user name', function(){

		AuthPage.verifyFirstAndLastName();

	})
});