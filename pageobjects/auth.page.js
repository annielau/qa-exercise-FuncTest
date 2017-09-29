var Page= require('./page')
var expect = require ('chai').expect;

var authPage = Object.create(Page, {

	greetingMessage: {get: function(){return browser.element('h1=Welcome to MURAL')}},
	loginWithFacebookButton: {get: function(){return browser.element('.Clickable')}},
	emailField: {get: function(){return browser.element('#email')}},
	passField: {get: function(){return browser.element('#pass')}},
	loginButton: {get: function(){return browser.element('#loginbutton')}},
	loggedMessage: {get: function(){return browser.element('h1=Howdy, you\'re now Authenticated')}},
	fullNameControl: {get: function(){return browser.element('div#root div.App div strong')}}, 

	verifyGreetingMessage: {
		value: function () {
			var greeting = this.greetingMessage.getText();
			expect(greeting).to.exist;

		}
	},

	verifyLoggedMessage: {
		value: function () {
			var greeting= this.loggedMessage.getText();
			expect (greeting).to.exist;

		}
	},

	getFirstName: {
		value: function () {
			var nameControl = browser.getText ('div#root div.App div strong'); 
			var nameText = nameControl.toString().split(',');
			var firstName = nameText[0];
			return firstName;

		}
	},

	getLastName: {
		value: function () {
			var nameControl = browser.getText ('div#root div.App div strong'); 
			var nameText = nameControl.toString().split(',');
			var lastName = nameText[1];
			return lastName;

		}
	},

	verifyFirstAndLastName: {
		value: function () {
			expect (this.getFirstName()).to.have.string('Ana');
			expect (this.getLastName()).to.have.string('Mil');
			
		}
	},
});

module.exports = authPage;