export class SongInfo {
  constructor(
    public id: number,
    public name: string,
    public singer: string,
    public albumId: number,
    public picUrl: string,
    public songUrl: string
  ) { }
}

var state: SongInfo | null = null;
var updateAt: number = Date.now();

export function setState(newState: SongInfo) {
  state = newState;
  updateAt = Date.now();
}

export function getState(allowOutdate: boolean): SongInfo | null {
  if (!allowOutdate && Date.now() - updateAt > 6 * 60 * 1000) {
    return null;
  }
  return state;
}

export function debugState(): [SongInfo | null, number] {
  return [state, updateAt];
}
