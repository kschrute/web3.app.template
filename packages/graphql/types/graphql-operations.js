"use strict";
exports.__esModule = true;
exports.FeedDocument = exports.SortOrder = void 0;
var SortOrder;
(function (SortOrder) {
    SortOrder["Asc"] = "asc";
    SortOrder["Desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
exports.FeedDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "Feed" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "feed" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "content" } }, { "kind": "Field", "name": { "kind": "Name", "value": "published" } }, { "kind": "Field", "name": { "kind": "Name", "value": "author" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "address" } }] } }] } }] } }] };
