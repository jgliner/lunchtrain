"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrainsListEntry = function (_React$Component) {
  _inherits(TrainsListEntry, _React$Component);

  function TrainsListEntry(props) {
    _classCallCheck(this, TrainsListEntry);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TrainsListEntry).call(this, props));

    _this.state = {
      accordionClass: 'hidden',
      open: false
    };
    return _this;
  }

  _createClass(TrainsListEntry, [{
    key: "render",
    value: function render() {
      var train = this.props.train;
      var handleAccordionMap = function handleAccordionMap(train) {
        this.props.handleAccordionMap(train);
      };
      return React.createElement(
        "div",
        { className: "trainEntry", onClick: handleAccordionMap.bind(this, this.props.train) },
        React.createElement(
          "div",
          { className: "trainContainer" },
          React.createElement(
            "div",
            { className: "trainIconTimeWrapper" },
            React.createElement("div", { className: "trainIcon" }),
            React.createElement(
              "div",
              { className: "timeWrapper" },
              React.createElement(
                "div",
                { className: "time" },
                train.timeDeparting,
                "---",
                train.timeBack
              )
            )
          ),
          React.createElement(
            "div",
            { className: "trainDetailsWrapper" },
            React.createElement(
              "h2",
              { className: "trainDest" },
              train.destinationName
            ),
            React.createElement(
              "div",
              { className: "trainRatingsWrapper" },
              React.createElement(
                "div",
                { className: "likes col-xs-6" },
                React.createElement(
                  "div",
                  null,
                  "♥3"
                )
              ),
              React.createElement(
                "div",
                { className: "price col-xs-6" },
                React.createElement(
                  "div",
                  null,
                  "$$"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "passengersWrapper" },
            React.createElement(
              "div",
              { className: "conductor passenger" },
              React.createElement("div", { className: "slackPic" })
            ),
            train.passengers.map(function (passenger) {
              return React.createElement(
                "div",
                { className: "passenger" },
                React.createElement("div", { className: "slackPic" })
              );
            })
          )
        ),
        React.createElement(TrainsListEntryDropdown, { train: train, className: this.state.accordionClass })
      );
    }
  }]);

  return TrainsListEntry;
}(React.Component);