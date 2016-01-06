(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Searchable Table
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Author: Jean-Pierre Sierens
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	===========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SearchableTable = (function (_React$Component) {
	_inherits(SearchableTable, _React$Component);

	function SearchableTable() {
		_classCallCheck(this, SearchableTable);

		// Initial state of the component

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchableTable).call(this));

		_this.state = { filterText: '' };
		return _this;
	}

	_createClass(SearchableTable, [{
		key: 'handleUserInput',
		value: function handleUserInput(filterText) {
			// When there's a change in the state, the component and all its
			// sub-components get updated.
			this.setState({ filterText: filterText });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(SearchBar, {
					filterText: this.state.filterText,
					onUserInput: this.handleUserInput.bind(this)
				}),
				_react2.default.createElement(Table, {
					data: this.props.data,
					filterText: this.state.filterText
				})
			);
		}
	}]);

	return SearchableTable;
})(_react2.default.Component);

exports.default = SearchableTable;

var SearchBar = (function (_React$Component2) {
	_inherits(SearchBar, _React$Component2);

	function SearchBar() {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).apply(this, arguments));
	}

	_createClass(SearchBar, [{
		key: 'handleChange',
		value: function handleChange() {
			// passing filter data up by using a callback
			this.props.onUserInput(
			// ref is like the id
			this.refs.filterTextInput.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				null,
				_react2.default.createElement('input', {
					type: 'text',
					placeholder: 'Search for one keyword...',
					ref: 'filterTextInput',
					value: this.props.filterText,
					onChange: this.handleChange.bind(this)
				})
			);
		}
	}]);

	return SearchBar;
})(_react2.default.Component);

var Table = (function (_React$Component3) {
	_inherits(Table, _React$Component3);

	function Table() {
		_classCallCheck(this, Table);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));
	}

	_createClass(Table, [{
		key: 'render',
		value: function render() {
			var sections = [];
			var data = this.props.data;
			data.forEach((function (product) {
				if (product.name.indexOf(this.props.filterText) === -1) {
					return;
				}
				sections.push(_react2.default.createElement(Section, { key: product.name, data: product }));
			}).bind(this));
			return _react2.default.createElement(
				'div',
				null,
				sections
			);
		}
	}]);

	return Table;
})(_react2.default.Component);

var Section = (function (_React$Component4) {
	_inherits(Section, _React$Component4);

	function Section() {
		_classCallCheck(this, Section);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Section).apply(this, arguments));
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					null,
					this.props.data.name,
					' = ',
					this.props.data.price,
					' '
				)
			);
		}
	}]);

	return Section;
})(_react2.default.Component);

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SearchableTable = require('./SearchableTable');

var _SearchableTable2 = _interopRequireDefault(_SearchableTable);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Filterable CheatSheet Component
/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

_reactDom2.default.render(_react2.default.createElement(_SearchableTable2.default, { data: _data.data }), document.getElementById('searchableTable'));

},{"./SearchableTable":1,"./data":3,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = exports.data = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvU2VhcmNoYWJsZVRhYmxlLmpzIiwiYXBwL2FwcC5qcyIsImFwcC9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUXFCLGVBQWU7V0FBZixlQUFlOztBQUNuQyxVQURvQixlQUFlLEdBQ3JCO3dCQURNLGVBQWU7Ozs7cUVBQWYsZUFBZTs7QUFJNUIsUUFBSyxLQUFLLEdBQUcsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUE7O0VBQ2hDOztjQUxnQixlQUFlOztrQ0FNaEIsVUFBVSxFQUFFOzs7QUFHeEIsT0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0dBQzNDOzs7MkJBQ0k7QUFDUCxVQUNDOzs7SUFDQyw4QkFBQyxTQUFTO0FBQ1QsZUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxBQUFDO0FBQ25CLGdCQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUM7TUFDL0M7SUFDZCw4QkFBQyxLQUFLO0FBQ0wsU0FBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxBQUFDO0FBQ3RCLGVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQUFBQztNQUNqQztJQUNHLENBQ0w7R0FDRjs7O1FBeEJtQixlQUFlO0dBQVMsZ0JBQU0sU0FBUzs7a0JBQXZDLGVBQWU7O0lBMkI5QixTQUFTO1dBQVQsU0FBUzs7VUFBVCxTQUFTO3dCQUFULFNBQVM7O2dFQUFULFNBQVM7OztjQUFULFNBQVM7O2lDQUNDOztBQUVSLE9BQUksQ0FBQyxLQUFLLENBQUMsV0FBVzs7QUFFbEIsT0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUNsQyxDQUFD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WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4qXHRTZWFyY2hhYmxlIFRhYmxlXG4qXHRBdXRob3I6IEplYW4tUGllcnJlIFNpZXJlbnNcbipcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoYWJsZVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHQvLyBJbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtmaWx0ZXJUZXh0OiAnJ31cbiAgICB9XG4gICAgaGFuZGxlVXNlcklucHV0KGZpbHRlclRleHQpIHtcbiAgICBcdC8vIFdoZW4gdGhlcmUncyBhIGNoYW5nZSBpbiB0aGUgc3RhdGUsIHRoZSBjb21wb25lbnQgYW5kIGFsbCBpdHMgXG4gICAgXHQvLyBzdWItY29tcG9uZW50cyBnZXQgdXBkYXRlZC5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyVGV4dDogZmlsdGVyVGV4dH0pO1xuICAgIH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxTZWFyY2hCYXIgXG5cdFx0XHRcdFx0ZmlsdGVyVGV4dD17dGhpcy5zdGF0ZS5maWx0ZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuXHRcdFx0XHQ8VGFibGUgXG5cdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBcblx0XHRcdFx0XHRmaWx0ZXJUZXh0PXt0aGlzLnN0YXRlLmZpbHRlclRleHR9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGhhbmRsZUNoYW5nZSgpIHtcblx0XHQvLyBwYXNzaW5nIGZpbHRlciBkYXRhIHVwIGJ5IHVzaW5nIGEgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5wcm9wcy5vblVzZXJJbnB1dChcbiAgICAgICAgXHQvLyByZWYgaXMgbGlrZSB0aGUgaWRcbiAgICAgICAgICAgIHRoaXMucmVmcy5maWx0ZXJUZXh0SW5wdXQudmFsdWVcbiAgICAgICAgKTtcbiAgICB9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgXHR0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIG9uZSBrZXl3b3JkLi4uXCIgXG4gICAgICAgICAgICAgICAgXHRyZWY9XCJmaWx0ZXJUZXh0SW5wdXRcIlxuICAgICAgICAgICAgICAgIFx0dmFsdWU9IHt0aGlzLnByb3BzLmZpbHRlclRleHR9XG4gICAgICAgICAgICAgICAgXHRvbkNoYW5nZT0ge3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG5cdH1cbn1cblxuY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRsZXQgc2VjdGlvbnMgPSBbXTtcblx0XHRsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24ocHJvZHVjdCl7XG5cdFx0XHRpZiAocHJvZHVjdC5uYW1lLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXJUZXh0KSA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2VjdGlvbnMucHVzaCg8U2VjdGlvbiBrZXk9e3Byb2R1Y3QubmFtZX0gZGF0YT17cHJvZHVjdH0gLz4pO1xuXHRcdH0uYmluZCh0aGlzKSlcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PntzZWN0aW9uc308L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8cD57dGhpcy5wcm9wcy5kYXRhLm5hbWV9ID0ge3RoaXMucHJvcHMuZGF0YS5wcmljZX0gPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSIsIi8qXG4qXHRBdXRob3I6IEplYW4tUGllcnJlIFNpZXJlbnNcbipcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNlYXJjaGFibGVUYWJsZSBmcm9tICcuL1NlYXJjaGFibGVUYWJsZSc7XG5pbXBvcnQge2RhdGF9IGZyb20gJy4vZGF0YSc7XG5cbi8vIEZpbHRlcmFibGUgQ2hlYXRTaGVldCBDb21wb25lbnRcblJlYWN0RE9NLnJlbmRlciggPFNlYXJjaGFibGVUYWJsZSBkYXRhPXtkYXRhfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYWJsZVRhYmxlJykgKTsiLCJleHBvcnQgY29uc3QgZGF0YSA9IFtcbiAge2NhdGVnb3J5OiBcIlNwb3J0aW5nIEdvb2RzXCIsIHByaWNlOiBcIiQ0OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIkZvb3RiYWxsXCJ9LFxuICB7Y2F0ZWdvcnk6IFwiU3BvcnRpbmcgR29vZHNcIiwgcHJpY2U6IFwiJDkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJCYXNlYmFsbFwifSxcbiAge2NhdGVnb3J5OiBcIlNwb3J0aW5nIEdvb2RzXCIsIHByaWNlOiBcIiQyOS45OVwiLCBzdG9ja2VkOiBmYWxzZSwgbmFtZTogXCJCYXNrZXRiYWxsXCJ9LFxuICB7Y2F0ZWdvcnk6IFwiRWxlY3Ryb25pY3NcIiwgcHJpY2U6IFwiJDk5Ljk5XCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiaVBvZCBUb3VjaFwifSxcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQzOTkuOTlcIiwgc3RvY2tlZDogZmFsc2UsIG5hbWU6IFwiaVBob25lIDVcIn0sXG4gIHtjYXRlZ29yeTogXCJFbGVjdHJvbmljc1wiLCBwcmljZTogXCIkMTk5Ljk5XCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiTmV4dXMgN1wifVxuXTsiXX0=
