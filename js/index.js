var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //flags are 32px x 32px
var
ForceDirctedGraphContainer = function (_React$Component) {_inherits(ForceDirctedGraphContainer, _React$Component);
  function ForceDirctedGraphContainer(props) {_classCallCheck(this, ForceDirctedGraphContainer);var _this = _possibleConstructorReturn(this, (ForceDirctedGraphContainer.__proto__ || Object.getPrototypeOf(ForceDirctedGraphContainer)).call(this,
    props));
    _this.state = { countryData: {} };return _this;
  }_createClass(ForceDirctedGraphContainer, [{ key: "componentDidMount", value: function componentDidMount()

    {var _this2 = this;
      var url = "https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json";
      d3.json(url, function (json) {
        _this2.setState({ countryData: json });
      });
    } }, { key: "render", value: function render()
    {
      return React.createElement(ForceDirctedGraph, { countryData: this.state.countryData });
    } }]);return ForceDirctedGraphContainer;}(React.Component);var


ForceDirctedGraph = function (_React$Component2) {_inherits(ForceDirctedGraph, _React$Component2);function ForceDirctedGraph() {_classCallCheck(this, ForceDirctedGraph);return _possibleConstructorReturn(this, (ForceDirctedGraph.__proto__ || Object.getPrototypeOf(ForceDirctedGraph)).apply(this, arguments));}_createClass(ForceDirctedGraph, [{ key: "componentDidUpdate", value: function componentDidUpdate()

    {
      var margin = {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20 };


      var width = 1000,height = 900;
      // width = w - margin.left - margin.right,
      // height = h - margin.top - margin.bottom;
      var flagContainer = d3.select("#container").
      append("div").
      attr("id", "flag-container");

      var svg = d3.select("#container").
      append("svg").
      attr("width", width).
      attr("height", height).
      attr("id", "graph");

      // let color = d3.scaleOrdinal(d3.schemeCategory20b);

      if (this.props.countryData.nodes) {






















































        //svg.call(tip);
        var
        ticked = function ticked() {
          link.
          attr("x1", function (d) {return d.source.x;}).
          attr("y1", function (d) {return d.source.y;}).
          attr("x2", function (d) {return d.target.x;}).
          attr("y2", function (d) {return d.target.y;});
          node.
          style("left", function (d) {
            return d.x - blockWidth / 2 + 'px';
          }).
          style("top", function (d) {
            return d.y - blockWidth / 2 + 'px';
          });

          // .attr('transform', function(d) { return "translate ("+(d.x - (blockWidth/2))+","+(d.y - (blockWidth/2))+")"; });


        };var

        dragstarted = function dragstarted(d) {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        };var

        dragged = function dragged(d) {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        };var

        dragended = function dragended(d) {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        };var nodes = this.props.countryData.nodes;var links = this.props.countryData.links;var div = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);var simulation = d3.forceSimulation().force("link", d3.forceLink().id(function (d, i) {return i;}).distance(50)).force("charge", d3.forceManyBody().strength(-100)).force("center", d3.forceCenter(width / 2, height / 2)).force("y", d3.forceY(0)).force("x", d3.forceX(0));var node = flagContainer.selectAll('.flag').data(nodes).enter().append('div').attr("class", function (d) {return "flag flag-" + d.code;}).on("mouseover", function (d) {div.transition().duration(200).style("opacity", .9);div.html(d.country).style("left", d3.event.pageX + 5 + "px").style("top", d3.event.pageY + 5 + "px");}).on("mouseout", function (d) {div.transition().duration(500).style("opacity", 0);}).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));var link = svg.append("g").attr("class", "links").selectAll("line").data(links).enter().append("line").attr("stroke-width", 1);var blockWidth = 24,blockHeight = 24;simulation.nodes(nodes).on("tick", ticked);simulation.force("link").links(links);;
      }
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement("h1", null, "Force-Directed Graph of State Contiguity"),
          React.createElement("div", { id: "container" })));

    } }]);return ForceDirctedGraph;}(React.Component);


ReactDOM.render(React.createElement(ForceDirctedGraphContainer, null), document.querySelector("#root"));