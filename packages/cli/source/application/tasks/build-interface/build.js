import throat from 'throat';

export default build;

async function build(items = [], options = {}) {
  let count = 1;
  const c = options.concurrency || 1;

  const ident = async i => i;
  const read = options.read || ident;
  const write = options.write || ident;
  const done = options.done || ident;

  const jobs = items.map(
    throat(c, async item => {
      const fetched = await read(item, items, count);
      const result = await write(fetched, item, items, count);
      count++;
      return result;
    })
  );

  const results = await Promise.all(jobs);
  return done(items, results, count);
}
