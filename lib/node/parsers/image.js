"use strict";

module.exports = function (res, fn) {
  var data = []; // Binary data needs binary storage

  res.on('data', function (chunk) {
    data.push(chunk);
  });
  res.on('end', function () {
    fn(null, Buffer.concat(data));
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3BhcnNlcnMvaW1hZ2UuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcyIsImZuIiwiZGF0YSIsIm9uIiwiY2h1bmsiLCJwdXNoIiwiQnVmZmVyIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxFQUFOLEVBQWE7QUFDNUIsTUFBTUMsSUFBSSxHQUFHLEVBQWIsQ0FENEIsQ0FDWDs7QUFFakJGLEVBQUFBLEdBQUcsQ0FBQ0csRUFBSixDQUFPLE1BQVAsRUFBZSxVQUFDQyxLQUFELEVBQVc7QUFDeEJGLElBQUFBLElBQUksQ0FBQ0csSUFBTCxDQUFVRCxLQUFWO0FBQ0QsR0FGRDtBQUdBSixFQUFBQSxHQUFHLENBQUNHLEVBQUosQ0FBTyxLQUFQLEVBQWMsWUFBTTtBQUNsQkYsSUFBQUEsRUFBRSxDQUFDLElBQUQsRUFBT0ssTUFBTSxDQUFDQyxNQUFQLENBQWNMLElBQWQsQ0FBUCxDQUFGO0FBQ0QsR0FGRDtBQUdELENBVEQiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChyZXMsIGZuKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXTsgLy8gQmluYXJ5IGRhdGEgbmVlZHMgYmluYXJ5IHN0b3JhZ2VcblxuICByZXMub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcbiAgICBkYXRhLnB1c2goY2h1bmspO1xuICB9KTtcbiAgcmVzLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgZm4obnVsbCwgQnVmZmVyLmNvbmNhdChkYXRhKSk7XG4gIH0pO1xufTtcbiJdfQ==