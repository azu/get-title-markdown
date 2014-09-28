"use strict";
var assert = require("power-assert");
describe("get-title-markdown-test", function () {
    context("when has title", function () {
        it("should return title of markdown", function () {
            var markdown = "# title";
            assert.equal(getTitle(markdown), "title");
        });
    });
    context("when empty line before title", function () {
        it("should return title of markdown", function () {
            var markdown = "\n\n## title";
            assert.equal(getTitle(markdown), "title");
        });
    });
    context("when has not # title ", function () {
        it("should return null", function () {
            var markdown = " test ";
            assert.equal(getTitle(markdown), null);
        });
    });
});
var getTitle = require("../");
