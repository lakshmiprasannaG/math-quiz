const assert = require('assert');
const { Add, Sub, Mul, Div } = require('./../src/operations.js');

describe('Add', () => {
  it('should add given operands', () => {
    const add = new Add([1, 2]);
    assert.strictEqual(add.evaluate(), 3);
  });

  it('should give question with given operands', () => {
    const add = new Add([1, 2]);
    assert.strictEqual(add.asString(), '1+2');
  });
});

describe('Sub', () => {
  it('should subtract given operands', () => {
    const sub = new Sub([2, 1]);
    assert.strictEqual(sub.evaluate(), 1);
  });

  it('should give question with given operands', () => {
    const sub = new Sub([1, 2]);
    assert.strictEqual(sub.asString(), '1-2');
  });
});

describe('Mul', () => {
  it('should multiply given operands', () => {
    const mul = new Mul([1, 2]);
    assert.strictEqual(mul.evaluate(), 2);
  });

  it('should give question with given operands', () => {
    const mul = new Mul([1, 2]);
    assert.strictEqual(mul.asString(), '1*2');
  });
});

describe('Div', () => {
  it('should divide given operands', () => {
    const div = new Div([2, 1]);
    assert.strictEqual(div.evaluate(), 2);
  });

  it('should give question with given operands', () => {
    const div = new Div([1, 2]);
    assert.strictEqual(div.asString(), '1/2');
  });
});
