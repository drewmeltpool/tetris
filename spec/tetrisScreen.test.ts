import TetrisScreen from '../src/TetrisScreen';

describe('TetrisScreen', () => {
  it('init screen map', () => {
    const screen = new TetrisScreen(1, 1);

    expect(screen.init()).toEqual([['.']]);
  });
});
