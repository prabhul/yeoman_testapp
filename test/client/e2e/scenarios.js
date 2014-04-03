'use strict';

describe('PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('http://localhost:9001');
    });


    it('should filter the phone list as user types into the search box', function() {

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });

    // it('should display search text in the page title', function(){
    //   var statusElement = element(by.id('status'));
    //   expect(statusElement.getText()).toMatch(/Current filter: \s*$/);

    //   element(by.model('query')).sendKeys('nexus');

    //   expect(statusElement.getText()).toMatch(/Current filter: nexus\s*$/);

    //   //alternative version of the last assertion that tests just the value of the binding
    //   expect(statusElement.element(by.binding('query'))).toBe('nexus');
    // });
  });
});