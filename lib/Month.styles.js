"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekHeader = exports.TableHeader = exports.TableBody = exports.MonthTable = exports.MonthHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MonthTable = _styledComponents.default.table(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-collapse: collapse;\n  width: 100%;\n"])));

exports.MonthTable = MonthTable;

var TableHeader = _styledComponents.default.thead(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  th {\n    padding: 0.5em;\n  }\n"])));

exports.TableHeader = TableHeader;

var MonthHeader = _styledComponents.default.tr(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n"])), props => props.theme.color.monthBG, props => props.theme.color.monthBG, props => props.theme.color.monthFG);

exports.MonthHeader = MonthHeader;

var WeekHeader = _styledComponents.default.tr(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n"])), props => props.theme.color.weekBG, props => props.theme.color.weekBG, props => props.theme.color.weekFG);

exports.WeekHeader = WeekHeader;

var TableBody = _styledComponents.default.tbody(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: ", ";\n"])), props => props.theme.font.sizeBody);

exports.TableBody = TableBody;
//# sourceMappingURL=Month.styles.js.map