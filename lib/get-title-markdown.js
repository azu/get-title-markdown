/**
 * Created by azu on 2014/09/28.
 * LICENSE : MIT
 */
"use strict";
var headerMatch = /^#+(.*)$/;
function getTitleMarkdown(text) {
    var lines = text.split("\n");
    var noEmptyLines = lines.filter(function (line) {
        return line.length > 0;
    });
    if (noEmptyLines.length === 0) {
        throw new Error("no content");
    }
    var firstLine = noEmptyLines[0];
    var match = firstLine.match(headerMatch);
    if (match == null) {
        return;
    }
    var title = match && match[1];
    return title.trim();
}
module.exports = getTitleMarkdown;