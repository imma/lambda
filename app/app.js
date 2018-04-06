exports.app = function (event, context) {
  'use strict';
  console.log(event);
  context.succeed('hello world');
};
