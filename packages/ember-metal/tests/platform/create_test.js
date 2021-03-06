// ==========================================================================
// Project:  Ember Metal
// Copyright: ©2011 Strobe Inc. and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

require('ember-metal');

module("Ember.platform.create()");

test("should inherit the properties from the parent object", function() {
  var obj = { foo: 'FOO' };
  var obj2 = Ember.platform.create(obj);
  ok(obj !== obj2, 'should be a new instance');
  equal(obj2.foo, obj.foo, 'should inherit from parent');

  obj2.foo = 'BAR';
  equal(obj2.foo, 'BAR', 'should change foo');
  equal(obj.foo, 'FOO', 'modifying obj2 should not modify obj');
});

test("passing additional property descriptors should define", function() {
  var obj = { foo: 'FOO', repl: 'obj' };
  var obj2 = Ember.platform.create(obj, {
    bar: {
      value: 'BAR'
    },

    repl: {
      value: 'obj2'
    }
  });

  equal(obj2.bar, 'BAR', 'should have defined');
  equal(obj2.repl, 'obj2', 'should have replaced parent');
});

