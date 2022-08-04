"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayLabel = exports.DayCell = exports.DayButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getColorName = (props, suffix) => {
  if (!props.inThisMonth) {
    return props.weekend ? "weekend".concat(suffix) : "otherMonth".concat(suffix);
  }

  if (props.selected) {
    return "selected".concat(suffix);
  }

  if (props.today) {
    return "today".concat(suffix);
  }

  if (props.weekend) {
    return "weekend".concat(suffix);
  }

  return "day".concat(suffix);
};

var DayCell = _styledComponents.default.td(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  padding: 0;\n  text-align: center;\n  button {\n    color: ", ";\n  }\n"])), props => props.theme.color[getColorName(props, 'BG')], props => props.theme.color.dayBorder, props => props.theme.color[getColorName(props, 'FG')]);

exports.DayCell = DayCell;

var DayButton = _styledComponents.default.button.attrs(_ref => {
  var {
    onClick,
    value
  } = _ref;
  return {
    onclick: onClick,
    value
  };
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  font-family: ", ";\n  font-size: ", ";\n  padding: 0.5em 0;\n  width: 100%;\n"])), props => props.theme.font.family, props => props.theme.font.sizeBody);

exports.DayButton = DayButton;

var DayLabel = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), props => props.theme.color.unselectableFG);

exports.DayLabel = DayLabel;
//# sourceMappingURL=Week.styles.js.map