'use strict';

var _babelCore = require('babel-core');

var babel = _interopRequireWildcard(_babelCore);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;
app.use((0, _cors2.default)());

app.get('/', function (req, res) {
    res.set('content-type', 'text/html');
    res.send(_fs2.default.readFileSync(__dirname + '/index.html', 'utf8'));
    res.end();
});

app.get('/whoami', function (req, res) {
    var whoamiObj = {
        os: _os2.default.type(),
        language: req.headers['accept-language'].split(',')[0],
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip
    };
    res.send(whoamiObj);
    res.end();
});

app.listen(PORT, function () {
    return console.log('Server running on port ' + PORT);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJiYWJlbCIsImFwcCIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwidXNlIiwiZ2V0IiwicmVxIiwicmVzIiwic2V0Iiwic2VuZCIsInJlYWRGaWxlU3luYyIsIl9fZGlybmFtZSIsImVuZCIsIndob2FtaU9iaiIsIm9zIiwidHlwZSIsImxhbmd1YWdlIiwiaGVhZGVycyIsInNwbGl0IiwiaXAiLCJjb25uZWN0aW9uIiwicmVtb3RlQWRkcmVzcyIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0lBQVlBLEs7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBR0EsSUFBTUMsTUFBTSx3QkFBWjtBQUNBLElBQU1DLE9BQU9DLFFBQVFDLEdBQVIsQ0FBWUYsSUFBWixJQUFvQixJQUFqQztBQUNBRCxJQUFJSSxHQUFKLENBQVEscUJBQVI7O0FBRUFKLElBQUlLLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQzdCQSxRQUFJQyxHQUFKLENBQVEsY0FBUixFQUF1QixXQUF2QjtBQUNBRCxRQUFJRSxJQUFKLENBQVMsYUFBR0MsWUFBSCxDQUFnQkMsWUFBVSxhQUExQixFQUF3QyxNQUF4QyxDQUFUO0FBQ0FKLFFBQUlLLEdBQUo7QUFDSCxDQUpEOztBQU1BWixJQUFJSyxHQUFKLENBQVEsU0FBUixFQUFtQixVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDbkMsUUFBTU0sWUFBWTtBQUNkQyxZQUFHLGFBQUdDLElBQUgsRUFEVztBQUVkQyxrQkFBU1YsSUFBSVcsT0FBSixDQUFZLGlCQUFaLEVBQStCQyxLQUEvQixDQUFxQyxHQUFyQyxFQUEwQyxDQUExQyxDQUZLO0FBR2RDLFlBQUliLElBQUlXLE9BQUosQ0FBWSxpQkFBWixLQUFrQ1gsSUFBSWMsVUFBSixDQUFlQyxhQUFqRCxJQUFrRWYsSUFBSWE7QUFINUQsS0FBbEI7QUFLQVosUUFBSUUsSUFBSixDQUFTSSxTQUFUO0FBQ0FOLFFBQUlLLEdBQUo7QUFDSCxDQVJEOztBQVVBWixJQUFJc0IsTUFBSixDQUFXckIsSUFBWCxFQUFpQjtBQUFBLFdBQU1zQixRQUFRQyxHQUFSLDZCQUFzQ3ZCLElBQXRDLENBQU47QUFBQSxDQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGJhYmVsIGZyb20gJ2JhYmVsLWNvcmUnO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBvcyBmcm9tICdvcyc7XHJcblxyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5hcHAudXNlKGNvcnMoKSlcclxuXHJcbmFwcC5nZXQoJy8nLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgIHJlcy5zZXQoJ2NvbnRlbnQtdHlwZScsJ3RleHQvaHRtbCcpO1xyXG4gICAgcmVzLnNlbmQoZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSsnL2luZGV4Lmh0bWwnLCd1dGY4JykpO1xyXG4gICAgcmVzLmVuZCgpO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoJy93aG9hbWknLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHdob2FtaU9iaiA9IHtcclxuICAgICAgICBvczpvcy50eXBlKCksXHJcbiAgICAgICAgbGFuZ3VhZ2U6cmVxLmhlYWRlcnNbJ2FjY2VwdC1sYW5ndWFnZSddLnNwbGl0KCcsJylbMF0sXHJcbiAgICAgICAgaXA6IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1mb3InXSB8fCByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzIHx8IHJlcS5pcFxyXG4gICAgfVxyXG4gICAgcmVzLnNlbmQod2hvYW1pT2JqKVxyXG4gICAgcmVzLmVuZCgpO1xyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4gY29uc29sZS5sb2coYFNlcnZlciBydW5uaW5nIG9uIHBvcnQgJHtQT1JUfWApKSJdfQ==