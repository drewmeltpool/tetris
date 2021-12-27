class TetrisScreen {
  constructor(
    private readonly _width: number,
    private readonly _height: number
  ) {}

  init() {
    return Array(this._height)
      .fill(0)
      .map(() => Array(this._width).fill('.'));
  }
}

export default TetrisScreen;
