/**
 * Alfresco Governance Services REST API
 * **GS Core API**  Provides access to the core features of Alfresco Governance Services. 
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AlfrescoGovernanceServicesRestApi);
  }
}(this, function(expect, AlfrescoGovernanceServicesRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AlfrescoGovernanceServicesRestApi.Pagination();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Pagination', function() {
    it('should create an instance of Pagination', function() {
      // uncomment below and update the code to test Pagination
      //var instane = new AlfrescoGovernanceServicesRestApi.Pagination();
      //expect(instance).to.be.a(AlfrescoGovernanceServicesRestApi.Pagination);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new AlfrescoGovernanceServicesRestApi.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property hasMoreItems (base name: "hasMoreItems")', function() {
      // uncomment below and update the code to test the property hasMoreItems
      //var instane = new AlfrescoGovernanceServicesRestApi.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property totalItems (base name: "totalItems")', function() {
      // uncomment below and update the code to test the property totalItems
      //var instane = new AlfrescoGovernanceServicesRestApi.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property skipCount (base name: "skipCount")', function() {
      // uncomment below and update the code to test the property skipCount
      //var instane = new AlfrescoGovernanceServicesRestApi.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property maxItems (base name: "maxItems")', function() {
      // uncomment below and update the code to test the property maxItems
      //var instane = new AlfrescoGovernanceServicesRestApi.Pagination();
      //expect(instance).to.be();
    });

  });

}));
