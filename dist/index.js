"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionVersions = exports.QuestionTypes = exports.QuestionEncodings = exports.QuestionDifficulties = exports.QuestionAmountRange = exports.CategoryNamesPretty = exports.CategoryNameVersions = exports.CategoryNamesStrict = exports.getQuestions = exports.getCategoryData = exports.Validator = exports.Session = exports.OpenTDBUtil = exports.OpenTDBResponse = exports.OpenTDBError = exports.Category = void 0;
var Category_1 = require("./src/Classes/Category");
exports.Category = Category_1.default;
var CustomErrors_1 = require("./src/Classes/CustomErrors");
Object.defineProperty(exports, "OpenTDBError", { enumerable: true, get: function () { return CustomErrors_1.OpenTDBError; } });
Object.defineProperty(exports, "OpenTDBResponse", { enumerable: true, get: function () { return CustomErrors_1.OpenTDBResponse; } });
var OpenTDBUtil_1 = require("./src/Classes/OpenTDBUtil");
exports.OpenTDBUtil = OpenTDBUtil_1.default;
var Session_1 = require("./src/Classes/Session");
exports.Session = Session_1.default;
var Validator_1 = require("./src/Classes/Validator");
exports.Validator = Validator_1.default;
var getCategoryData_1 = require("./src/Functions/getCategoryData");
exports.getCategoryData = getCategoryData_1.default;
var getQuestions_1 = require("./src/Functions/getQuestions");
exports.getQuestions = getQuestions_1.default;
var enums_1 = require("./src/Typings/enums");
Object.defineProperty(exports, "CategoryNamesStrict", { enumerable: true, get: function () { return enums_1.CategoryNamesStrict; } });
Object.defineProperty(exports, "CategoryNameVersions", { enumerable: true, get: function () { return enums_1.CategoryNameVersions; } });
Object.defineProperty(exports, "CategoryNamesPretty", { enumerable: true, get: function () { return enums_1.CategoryNamesPretty; } });
Object.defineProperty(exports, "QuestionAmountRange", { enumerable: true, get: function () { return enums_1.QuestionAmountRange; } });
Object.defineProperty(exports, "QuestionDifficulties", { enumerable: true, get: function () { return enums_1.QuestionDifficulties; } });
Object.defineProperty(exports, "QuestionEncodings", { enumerable: true, get: function () { return enums_1.QuestionEncodings; } });
Object.defineProperty(exports, "QuestionTypes", { enumerable: true, get: function () { return enums_1.QuestionTypes; } });
Object.defineProperty(exports, "QuestionVersions", { enumerable: true, get: function () { return enums_1.QuestionVersions; } });
