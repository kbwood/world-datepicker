"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Select = _styledComponents.default.select(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 0;\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: bold;\n"])), props => props.theme.color.monthBG, props => props.theme.color.monthFG, props => props.theme.font.family, props => props.theme.font.sizeHeader);

exports.Select = Select;
//# sourceMappingURL=Header.styles.js.map