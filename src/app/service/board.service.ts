import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }
  sayMessage(): string {
    return 'hello world';
  }
}
