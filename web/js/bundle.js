(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
*	FreeMarker Cheatsheet App
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsSearchableTable = require('./components/SearchableTable');

var _componentsSearchableTable2 = _interopRequireDefault(_componentsSearchableTable);

var _componentsData = require('./components/data');

// Filterable CheatSheet Component
_react2['default'].render(_react2['default'].createElement(_componentsSearchableTable2['default'], { data: _componentsData.data }), document.getElementById('searchableTable'));

},{"./components/SearchableTable":2,"./components/data":3,"react":"react"}],2:[function(require,module,exports){
/*
*	Filterable Cheatsheet
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SearchableTable = (function (_React$Component) {
	function SearchableTable() {
		_classCallCheck(this, SearchableTable);

		_get(Object.getPrototypeOf(SearchableTable.prototype), 'constructor', this).call(this);
		// Initial state of the component
		this.state = { filterText: '' };
	}

	_inherits(SearchableTable, _React$Component);

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
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(SearchBar, {
					filterText: this.state.filterText,
					onUserInput: this.handleUserInput.bind(this)
				}),
				_react2['default'].createElement(Table, {
					data: this.props.data,
					filterText: this.state.filterText
				})
			);
		}
	}]);

	return SearchableTable;
})(_react2['default'].Component);

exports['default'] = SearchableTable;

var SearchBar = (function (_React$Component2) {
	function SearchBar() {
		_classCallCheck(this, SearchBar);

		_get(Object.getPrototypeOf(SearchBar.prototype), 'constructor', this).apply(this, arguments);
	}

	_inherits(SearchBar, _React$Component2);

	_createClass(SearchBar, [{
		key: 'handleChange',
		value: function handleChange() {
			// passing filter data up by using a callback
			this.props.onUserInput(
			// ref is like the id
			this.refs.filterTextInput.getDOMNode().value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'form',
				null,
				_react2['default'].createElement('input', {
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
})(_react2['default'].Component);

var Table = (function (_React$Component3) {
	function Table() {
		_classCallCheck(this, Table);

		_get(Object.getPrototypeOf(Table.prototype), 'constructor', this).apply(this, arguments);
	}

	_inherits(Table, _React$Component3);

	_createClass(Table, [{
		key: 'render',
		value: function render() {
			var sections = [];
			var data = this.props.data;
			data.forEach((function (product) {
				if (product.name.indexOf(this.props.filterText) === -1) {
					return;
				}
				sections.push(_react2['default'].createElement(Section, { data: product }));
			}).bind(this));
			return _react2['default'].createElement(
				'div',
				null,
				sections
			);
		}
	}]);

	return Table;
})(_react2['default'].Component);

var Section = (function (_React$Component4) {
	function Section() {
		_classCallCheck(this, Section);

		_get(Object.getPrototypeOf(Section.prototype), 'constructor', this).apply(this, arguments);
	}

	_inherits(Section, _React$Component4);

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
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
})(_react2['default'].Component);

module.exports = exports['default'];

},{"react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];
exports.data = data;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvanBzaWVyZW5zL0Rvd25sb2Fkcy9qc3hFczZHdWxwL2FwcC5qcyIsIi9Vc2Vycy9qcHNpZXJlbnMvRG93bmxvYWRzL2pzeEVzNkd1bHAvY29tcG9uZW50cy9TZWFyY2hhYmxlVGFibGUuanMiLCIvVXNlcnMvanBzaWVyZW5zL0Rvd25sb2Fkcy9qc3hFczZHdWxwL2NvbXBvbmVudHMvZGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7cUJDTWtCLE9BQU87Ozs7eUNBQ0csOEJBQThCOzs7OzhCQUN2QyxtQkFBbUI7OztBQUd0QyxtQkFBTSxNQUFNLENBQUMsMkVBQWlCLElBQUksa0JBSDFCLElBQUksQUFHNkIsR0FBRSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0x2RSxPQUFPOzs7O0lBRUosZUFBZTtBQUN4QixVQURTLGVBQWUsR0FDckI7d0JBRE0sZUFBZTs7QUFFbEMsNkJBRm1CLGVBQWUsNkNBRTFCOztBQUVGLE1BQUksQ0FBQyxLQUFLLEdBQUcsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUE7RUFDaEM7O1dBTGdCLGVBQWU7O2NBQWYsZUFBZTs7U0FNakIseUJBQUMsVUFBVSxFQUFFOzs7QUFHeEIsT0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0dBQzNDOzs7U0FDRSxrQkFBRTtBQUNQLFVBQ0M7OztJQUNDLGlDQUFDLFNBQVM7QUFDVCxlQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEFBQUM7QUFDbkIsZ0JBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztNQUMvQztJQUNkLGlD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QUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQzdFLEVBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUM1RSxDQUFDO1FBUFcsSUFBSSxHQUFKLElBQUkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbipcdEZyZWVNYXJrZXIgQ2hlYXRzaGVldCBBcHBcbipcdEF1dGhvcjogSmVhbi1QaWVycmUgU2llcmVuc1xuKlx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlYXJjaGFibGVUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoYWJsZVRhYmxlJztcbmltcG9ydCB7ZGF0YX0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEnO1xuXG4vLyBGaWx0ZXJhYmxlIENoZWF0U2hlZXQgQ29tcG9uZW50XG5SZWFjdC5yZW5kZXIoPFNlYXJjaGFibGVUYWJsZSBkYXRhPXtkYXRhfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYWJsZVRhYmxlJykpO1xuXG4iLCIvKlxuKlx0RmlsdGVyYWJsZSBDaGVhdHNoZWV0XG4qXHRBdXRob3I6IEplYW4tUGllcnJlIFNpZXJlbnNcbipcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoYWJsZVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHQvLyBJbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtmaWx0ZXJUZXh0OiAnJ31cbiAgICB9XG4gICAgaGFuZGxlVXNlcklucHV0KGZpbHRlclRleHQpIHtcbiAgICBcdC8vIFdoZW4gdGhlcmUncyBhIGNoYW5nZSBpbiB0aGUgc3RhdGUsIHRoZSBjb21wb25lbnQgYW5kIGFsbCBpdHMgXG4gICAgXHQvLyBzdWItY29tcG9uZW50cyBnZXQgdXBkYXRlZC5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyVGV4dDogZmlsdGVyVGV4dH0pO1xuICAgIH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxTZWFyY2hCYXIgXG5cdFx0XHRcdFx0ZmlsdGVyVGV4dD17dGhpcy5zdGF0ZS5maWx0ZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuXHRcdFx0XHQ8VGFibGUgXG5cdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBcblx0XHRcdFx0XHRmaWx0ZXJUZXh0PXt0aGlzLnN0YXRlLmZpbHRlclRleHR9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGhhbmRsZUNoYW5nZSgpIHtcblx0XHQvLyBwYXNzaW5nIGZpbHRlciBkYXRhIHVwIGJ5IHVzaW5nIGEgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5wcm9wcy5vblVzZXJJbnB1dChcbiAgICAgICAgXHQvLyByZWYgaXMgbGlrZSB0aGUgaWRcbiAgICAgICAgICAgIHRoaXMucmVmcy5maWx0ZXJUZXh0SW5wdXQuZ2V0RE9NTm9kZSgpLnZhbHVlXG4gICAgICAgICk7XG4gICAgfVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIFx0dHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBvbmUga2V5d29yZC4uLlwiIFxuICAgICAgICAgICAgICAgIFx0cmVmPVwiZmlsdGVyVGV4dElucHV0XCJcbiAgICAgICAgICAgICAgICBcdHZhbHVlPSB7dGhpcy5wcm9wcy5maWx0ZXJUZXh0fVxuICAgICAgICAgICAgICAgIFx0b25DaGFuZ2U9IHt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuXHR9XG59XG5cbmNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0bGV0IHNlY3Rpb25zID0gW107XG5cdFx0bGV0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3Qpe1xuXHRcdFx0aWYgKHByb2R1Y3QubmFtZS5pbmRleE9mKHRoaXMucHJvcHMuZmlsdGVyVGV4dCkgPT09IC0xKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHNlY3Rpb25zLnB1c2goPFNlY3Rpb24gZGF0YT17cHJvZHVjdH0gLz4pO1xuXHRcdH0uYmluZCh0aGlzKSlcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PntzZWN0aW9uc308L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8cD57dGhpcy5wcm9wcy5kYXRhLm5hbWV9ID0ge3RoaXMucHJvcHMuZGF0YS5wcmljZX0gPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSIsImV4cG9ydCBjb25zdCBkYXRhID0gW1xuICB7Y2F0ZWdvcnk6IFwiU3BvcnRpbmcgR29vZHNcIiwgcHJpY2U6IFwiJDQ5Ljk5XCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiRm9vdGJhbGxcIn0sXG4gIHtjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkOS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIkJhc2ViYWxsXCJ9LFxuICB7Y2F0ZWdvcnk6IFwiU3BvcnRpbmcgR29vZHNcIiwgcHJpY2U6IFwiJDI5Ljk5XCIsIHN0b2NrZWQ6IGZhbHNlLCBuYW1lOiBcIkJhc2tldGJhbGxcIn0sXG4gIHtjYXRlZ29yeTogXCJFbGVjdHJvbmljc1wiLCBwcmljZTogXCIkOTkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJpUG9kIFRvdWNoXCJ9LFxuICB7Y2F0ZWdvcnk6IFwiRWxlY3Ryb25pY3NcIiwgcHJpY2U6IFwiJDM5OS45OVwiLCBzdG9ja2VkOiBmYWxzZSwgbmFtZTogXCJpUGhvbmUgNVwifSxcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQxOTkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJOZXh1cyA3XCJ9XG5dOyJdfQ==
