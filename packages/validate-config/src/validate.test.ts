import { validate } from '.';

test('should fail for empty target', () => {
  const [, valid] = validate({
    name: 'test',
    target: {}
  });

  expect(valid).toBe(false);
});

test('should pass for minimal props', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      entry: [],
      docs: [],
      render: '',
      mount: ''
    }
  });

  expect(valid).toBe(true);
  expect(err).toBeNull();
});

test('should fail for missing entry', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      docs: [],
      render: '',
      mount: ''
    }
  });

  expect(valid).toBe(false);
  expect(err.message).toContain('required property \'entry\'');
});

test('should fail for missing docs', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      entry: [],
      render: '',
      mount: ''
    }
  });

  expect(valid).toBe(false);
  expect(err.message).toContain('required property \'docs\'');
});

test('should fail for missing render', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      entry: [],
      docs: [],
      mount: ''
    }
  });

  expect(valid).toBe(false);
  expect(err.message).toContain('required property \'render\'');
});

test('should fail for missing mount', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      entry: [],
      docs: [],
      render: ''
    }
  });

  expect(valid).toBe(false);
  expect(err.message).toContain('required property \'mount\'');
});

test('should fail for mismatched cover', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      entry: [],
      docs: [],
      render: '',
      mount: '',
      cover: 3
    }
  });

  expect(valid).toBe(false);
  expect(err.message).toContain('options.cover should be string');
});
