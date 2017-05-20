const Test = require('tape');

const Stats = require('..');

Test('fantasy stats', t => {

  t.test('request', t => {
    Stats.request().then(stats => {
      t.ok(typeof stats === 'string');
      t.ok(stats, 'obtained stats');

      t.end();
    })
    .catch(err => {
      t.fail(err, 'getting stats')
      t.end();
    });
  });

  t.test('get \'Content\' key', t => {
    Stats.request().then(stats => {
      t.ok(typeof stats === 'string');
      t.ok(stats, 'obtained stats');

      const content = Stats.getKey('Content', stats);
      t.ok(typeof content === 'object');
      t.ok(content, 'obtained content');

      t.end();
    })
    .catch(err => {
      t.fail(err, 'getting stats')
      t.end();
    });
  });

  t.test('get \'Content\', \'Title\' keys', t => {
    Stats.request().then(stats => {
      t.ok(typeof stats === 'string');
      t.ok(stats, 'obtained stats');

      const content = Stats.getKeys(['Content', 'Title'], stats);
      t.ok(typeof content === 'object');
      t.ok(content, 'obtained content');

      console.log(content);

      t.end();
    })
    .catch(err => {
      t.fail(err, 'getting stats')
      t.end();
    });
  });

});
