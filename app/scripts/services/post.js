'use strict';

app.factory('Post', function($resource) {
  return $resource('https://luminous-torch-603.firebaseio.com/posts/:id.json');
});