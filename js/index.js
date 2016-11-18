"use strict";

var LotteryApp = React.createClass({
  displayName: "LotteryApp",

  numberSort: function numberSort(a, b) {
    return a - b;
  },

  shuffle: function shuffle(a) {
    for (var i = a.length; i; i--) {
      var j = Math.floor(Math.random() * i);
      var _ref = [a[j], a[i - 1]];
      a[i - 1] = _ref[0];
      a[j] = _ref[1];
    }
  },

  draw: function draw() {
    var numbersArr = [];
    var finalNumbers = [];

    for (var n = 1; n < 91; n++) {
      numbersArr.push(n);
    }

    this.shuffle(numbersArr);
    finalNumbers = numbersArr.slice(0, 5).sort(this.numberSort);
    this.setState({
      draw: finalNumbers
    });
  },

  getInitialState: function getInitialState() {
    return {
      draw: []
    };
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Lottery app"
      ),
      React.createElement(
        "button", {
          value: "Generate",
          onClick: this.draw
        },
        "Generate"
      ),
      React.createElement(
        "p",
        null,
        "Drawn numbers: ",
        this.state.draw.toString()
      )
    );
  }
});

ReactDOM.render(React.createElement(LotteryApp, null), document.getElementById('myDiv'));
