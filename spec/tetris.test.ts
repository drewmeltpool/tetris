import TetrisScreen from '../src/TetrisScreen';
import Tetris from '../src/Tetris';
import plusFigure from '../src/plusFigure';

describe('Tetris', () => {
  it('Create landscape', () => {
    const screen = new TetrisScreen(1, 1).init();
    const tetris = new Tetris(screen);

    expect(tetris.landscape).toEqual([['.']]);
  });

  it('Set figure', () => {
    const screen = new TetrisScreen(3, 3).init();
    const tetris = new Tetris(screen);

    tetris.setFigure(plusFigure(0));

    expect(tetris.landscape).toEqual([
      ['.', 'p', '.'],
      ['p', 'p', 'p'],
      ['.', 'p', '.'],
    ]);
  });

  it('drop one level figure', () => {
    const screen = new TetrisScreen(3, 4).init();
    const tetris = new Tetris(screen);

    tetris.setFigure(plusFigure(0));
    tetris.dropOneLevelFigure();

    expect(tetris.landscape).toEqual([
      ['.', '.', '.'],
      ['.', 'p', '.'],
      ['p', 'p', 'p'],
      ['.', 'p', '.'],
    ]);
  });

  it('drop down figure', () => {
    const screen = new TetrisScreen(3, 4).init();
    const tetris = new Tetris(screen);

    tetris.setFigure(plusFigure(0));
    tetris.dropFigure();

    expect(tetris.landscape).toEqual([
      ['.', '.', '.'],
      ['.', '#', '.'],
      ['#', '#', '#'],
      ['.', '#', '.'],
    ]);
  });
});
