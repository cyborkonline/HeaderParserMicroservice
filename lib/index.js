'use strict';

var _babelCore = require('babel-core');

var babel = _interopRequireWildcard(_babelCore);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;
app.use((0, _cors2.default)());

app.get('/', function (req, res) {
    res.set('content-type', 'text/html');
    res.send(fs.readFileSync(__dirname + '/index.html', 'utf8'));
    res.end();
});

app.listen(PORT, function () {
    return console.log('Server running on port ' + PORT);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJiYWJlbCIsImFwcCIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwidXNlIiwiZ2V0IiwicmVxIiwicmVzIiwic2V0Iiwic2VuZCIsImZzIiwicmVhZEZpbGVTeW5jIiwiX19kaXJuYW1lIiwiZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7SUFBWUEsSzs7QUFDWjs7OztBQUNBOzs7Ozs7OztBQUdBLElBQU1DLE1BQU0sd0JBQVo7QUFDQSxJQUFNQyxPQUFPQyxRQUFRQyxHQUFSLENBQVlGLElBQVosSUFBb0IsSUFBakM7QUFDQUQsSUFBSUksR0FBSixDQUFRLHFCQUFSOztBQUdBSixJQUFJSyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUM3QkEsUUFBSUMsR0FBSixDQUFRLGNBQVIsRUFBdUIsV0FBdkI7QUFDQUQsUUFBSUUsSUFBSixDQUFTQyxHQUFHQyxZQUFILENBQWdCQyxZQUFVLGFBQTFCLEVBQXdDLE1BQXhDLENBQVQ7QUFDQUwsUUFBSU0sR0FBSjtBQUNILENBSkQ7O0FBTUFiLElBQUljLE1BQUosQ0FBV2IsSUFBWCxFQUFpQjtBQUFBLFdBQU1jLFFBQVFDLEdBQVIsNkJBQXNDZixJQUF0QyxDQUFOO0FBQUEsQ0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYWJlbCBmcm9tICdiYWJlbC1jb3JlJztcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcclxuYXBwLnVzZShjb3JzKCkpXHJcblxyXG5cclxuYXBwLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gICAgcmVzLnNldCgnY29udGVudC10eXBlJywndGV4dC9odG1sJyk7XHJcbiAgICByZXMuc2VuZChmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lKycvaW5kZXguaHRtbCcsJ3V0ZjgnKSk7XHJcbiAgICByZXMuZW5kKCk7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiBjb25zb2xlLmxvZyhgU2VydmVyIHJ1bm5pbmcgb24gcG9ydCAke1BPUlR9YCkpIl19