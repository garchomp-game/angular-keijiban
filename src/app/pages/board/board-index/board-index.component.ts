import { BoardService } from './../../../service/board.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-index',
  templateUrl: './board-index.component.html',
  styleUrls: ['./board-index.component.sass']
})
export class BoardIndexComponent implements OnInit {
  public sayMessage: string;
  constructor(
    private readonly boardService: BoardService
  ) { }

  ngOnInit() {
    this.sayMessage = this.boardService.sayMessage();
  }

}
