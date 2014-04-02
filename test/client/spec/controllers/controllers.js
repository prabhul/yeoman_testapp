'use strict';

describe('PhoneCat controllers', function() {
  beforeEach(module('phonecatApp'));

  describe('PhoneListCtrl', function(){

    it('should create "phones" model with 3 phones', inject(function($controller){
      var scope = {},
          ctrl = $controller('PhoneListCtrl', {$scope: scope});

      console.log(ctrl);
      expect(scope.phones.length).toBe(3);
    }));

    it('can set scopes name with world and more', inject(function($controller){
      var scope = {};
      var ctrl = $controller('PhoneListCtrl', {$scope: scope});
      console.log(ctrl);
      expect(scope.name).toBe('World');
    }));

  });
});