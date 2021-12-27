import plusFigure from 'src/plusFigure';
import Tetris from './src/Tetris';
import TetrisScreen from './src/TetrisScreen';

const logTetrisToTextFormat = (landscape: string[][]) => {
  console.info('~~~~~~~~~~~~~~~~~~~~~~');
  console.info(landscape.map((row) => row.join(' ')).join('\n'));
};

const screen = new TetrisScreen(7, 8).init();

const tetris = new Tetris(screen);

tetris.setFigure(plusFigure(0));
tetris.dropFigure(logTetrisToTextFormat);

tetris.setFigure(plusFigure(1));
tetris.dropFigure(logTetrisToTextFormat);

tetris.setFigure(plusFigure(2));
tetris.dropFigure(logTetrisToTextFormat);

tetris.setFigure(plusFigure(0));
tetris.dropFigure(logTetrisToTextFormat);
