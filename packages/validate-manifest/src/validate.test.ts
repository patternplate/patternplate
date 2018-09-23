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
      name: 'a',
      version: '1.0.0'
    }
  });

  expect(valid).toBe(true);
  expect(err).toBeNull();
});

test('should fail for missing name', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      version: '1'
    }
  });

  expect(valid).toBe(false);
  expect(err.message).toContain('required property \'name\'');
});

test('should suceed despite missing version', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      name: 'a'
    }
  });

  expect(valid).toBe(true);
});
test('should fail for mismatched version', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      name: 'a',
      version: 3
    }
  });

  expect(valid).toBe(false);
  expect(err.message).toContain('options.version should be string');
});

test('should fail for invalid semver', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      name: 'a',
      version: 'foo'
    }
  });

  expect(valid).toBe(false);
  expect(err.message).toContain('options.version should');
});

test('should fail for empty name', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      name: '',
      version: '1.0.0'
    }
  });

  expect(valid).toBe(false);
  expect(err.message).toContain('options.name should');
});


test('should fail for empty displayName', () => {
  const [err, valid] = validate({
    name: 'test',
    target: {
      name: 'a',
      displayName: '',
      version: '1.0.0'
    }
  });

  expect(valid).toBe(false);
  expect(err.message).toContain('options.displayName should');
});


