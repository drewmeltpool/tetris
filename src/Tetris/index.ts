class Tetris {
  private _figure?: number[][];

  public constructor(private _landscape: string[][]) {}

  public landFigure(figure?: number[][]) {
    figure?.forEach(([x, y]) => (this._landscape[x][y] = '#'));
    this._figure = undefined;
  }

  public clearFigure(figure?: number[][]) {
    figure?.forEach(([x, y]) => (this._landscape[x][y] = '.'));
  }

  public setFigure(figure?: number[][]) {
    let valid = true;
    figure?.forEach(
      ([x, y]) => this._landscape[x][y] === '#' && (valid = false)
    );
    if (valid) {
      figure?.forEach(([x, y]) => (this._landscape[x][y] = 'p'));
      this._figure = figure;
    }

    return valid;
  }

  public get landscape() {
    return this._landscape;
  }

  private _canDropCell(x: number, y: number) {
    try {
      if (this._landscape[x][y] === '#') return false;
      if (!this._landscape[x][y]) return false;
    } catch (error) {
      return false;
    }

    return true;
  }

  public dropOneLevelFigure() {
    const dropedFigure = this._figure?.map(([x, y]) => [x + 1, y]);
    const canDrop = dropedFigure?.every(([x, y]) => this._canDropCell(x, y));

    this.clearFigure(this._figure);

    canDrop ? this.setFigure(dropedFigure) : this.landFigure(this._figure);
  }

  public dropFigure(cb?: (_landscape: string[][]) => void) {
    while (this._figure) this.dropOneLevelFigure();
    cb && cb(this.landscape);
  }
}

export default Tetris;
