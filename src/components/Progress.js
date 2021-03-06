"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var Progress = (function(_React$Component) {
  _inherits(Progress, _React$Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(
      this,
      (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(
    Progress,
    [
      {
        key: "render",
        value: function render() {
          var _props = this.props,
            color = _props.color,
            completed = _props.completed,
            animation = _props.animation,
            height = _props.height,
            className = _props.className,
            children = _props.children,
            rest = _objectWithoutProperties(_props, [
              "color",
              "completed",
              "animation",
              "height",
              "className",
              "children"
            ]);

          var style = {
            backgroundColor: color,
            width: completed + "%",
            transition: "width " + animation + "ms",
            height: height,
            borderRadius: "3px"
          };

          return _react2.default.createElement(
            "div",
            _extends({ className: className || "progressbar-container" }, rest),
            _react2.default.createElement(
              "div",
              {
                className: "progressbar-progress",
                style: style
              },
              children
            )
          );
        }
      }
    ],
    [
      {
        key: "throwError",
        value: function throwError() {
          return new (Function.prototype.bind.apply(
            Error,
            [null].concat(Array.prototype.slice.call(arguments))
          ))();
        }
      }
    ]
  );

  return Progress;
})(_react2.default.Component);

Progress.propTypes = {
  completed: function completed(props, propName) {
    if (typeof props[propName] !== "number")
      return Progress.throwError('Invalid Props: "completed" should ∈ ℝ ');
    if (props[propName] < 0 || props[propName] > 100) {
      return Progress.throwError(
        'Invalid Props: "completed" should be between 0 and 100'
      );
    }
  },
  color: _propTypes2.default.string,
  animation: _propTypes2.default.number,
  height: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number
  ])
};
Progress.defaultProps = {
  completed: 0,
  color: "#0BD318",
  animation: 200,
  height: 10
};
exports.default = Progress;
