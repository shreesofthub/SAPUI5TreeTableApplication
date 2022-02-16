/*global QUnit*/

sap.ui.define([
	"treetable/controller/appView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("appView Controller");

	QUnit.test("I should test the appView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
