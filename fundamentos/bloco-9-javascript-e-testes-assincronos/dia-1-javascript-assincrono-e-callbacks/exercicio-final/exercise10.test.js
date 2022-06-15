beforeEach(() => console.log('1 - beforeEach')); // 1o, 4o
afterEach(() => console.log('1 - afterEach')); // 3o, 8o

test('', () => console.log('1 - test')); // 2o

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); // 5o
  afterEach(() => console.log('2 - afterEach')); // 7o

  test('', () => console.log('2 - test')); // 6o
});