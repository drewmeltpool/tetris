import TetrisScreen from '../src/TetrisScreen';

describe('TetrisScreen', () => {
  it('init screen map', () => {
    const expected = [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.'],
    ];

    const actual = new TetrisScreen(1, 1).init();

    expect(actual).toEqual(expected);
  });
});
