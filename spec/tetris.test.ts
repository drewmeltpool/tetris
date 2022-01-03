import TetrisScreen from '../src/TetrisScreen';
import Tetris from '../src/Tetris';
import plusFigure from '../src/plusFigure';

describe('Tetris', () => {
  const emptyLandscape = [
    ['.', '.', '.', '.'],
    ['.', '.', '.', '.'],
    ['.', '.', '.', '.'],
    ['.', '.', '.', '.'],
  ];

  it('Create empty landscape', () => {
    const screen = new TetrisScreen(4, 4).init();
    const tetris = new Tetris(screen);

    const { landscape: actual } = tetris;

    expect(actual).toEqual(emptyLandscape);
  });

  it('Set figure to landscape', () => {
    const expected = [
      ['.', 'p', '.'],
      ['p', 'p', 'p'],
      ['.', 'p', '.'],
    ];

    const screen = new TetrisScreen(3, 3).init();
    const tetris = new Tetris(screen);

    tetris.setFigure(plusFigure(0));

    const { landscape: actual } = tetris;

    expect(actual).toEqual(expected);
  });

  it('Drop one level figure', () => {
    const expected = [
      ['.', '.', '.'],
      ['.', 'p', '.'],
      ['p', 'p', 'p'],
      ['.', 'p', '.'],
    ];

    const screen = new TetrisScreen(3, 4).init();
    const tetris = new Tetris(screen);

    tetris.setFigure(plusFigure(0));
    tetris.dropOneLevelFigure();

    const { landscape: actual } = tetris;

    expect(actual).toEqual(expected);
  });

  it('Drop down figure', () => {
    const expected = [
      ['.', '.', '.'],
      ['.', '#', '.'],
      ['#', '#', '#'],
      ['.', '#', '.'],
    ];

    const screen = new TetrisScreen(3, 4).init();
    const tetris = new Tetris(screen);

    tetris.setFigure(plusFigure(0));
    tetris.dropFigure();

    const { landscape: actual } = tetris;

    expect(actual).toEqual(expected);
  });
});
