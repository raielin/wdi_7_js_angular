
// Define the inputs.
var DemoPage = function() {
    // We're selecting an element by its tagName
    this.pageHeader = element(by.tagName('h2'));

    // repeater - allows us to look for ng-repeat and then count the repeats.
    this.users = element.all(by.repeater('user in users'));
    this.firstNameField = element(by.css('#first_name'));
    this.lastNameField = element(by.css('#last_name'));
    this.submitBtn = element(by.css('form[name="createUserForm"] button[type="submit"]'));

    this.get = function() {
        browser.get('http://localhost:5000/index.html');
    };
};

describe('demo page', function() {
    var demoPage;

    beforeEach(function() {
        demoPage = new DemoPage();
        demoPage.get();
    });

    // Testing that the h2 on this page is Users.
    it('should have a h2 tag with the correct text', function() {
        expect(demoPage.pageHeader.getText()).toEqual('Users');
    });

    // Count the repeats.
    it('should have three users', function() {
        expect(demoPage.users.count()).toEqual(3);
    });

    it('should add a user', function() {
        expect(demoPage.users.count()).toEqual(3);

        // sendKeys simulates typing into input boxes.
        demoPage.firstNameField.sendKeys('John');
        demoPage.lastNameField.sendKeys('Smith');

        demoPage.submitBtn.click();

        expect(demoPage.users.count()).toEqual(4);
    });
});
