import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  title = 'Tic Tac Toe';
  status = 'Win'; // 'Win', 'Lose', 'Tie'
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  start = true;
  isCircle = this.start;
  startWith!: FormControl;

  ngOnInit() {
    this.startWith = new FormControl(this.start);
    this.startWith.valueChanges
      .pipe(startWith(this.start))
      .subscribe((value) => {
        this.clear();
      });
  }

  onclick(x: number, y: number) {
    console.log('Clicked', x, y);
    if (this.board[x][y] === '') {
      if (this.isCircle) {
        this.board[x][y] = 'O';
        this.isCircle = false;
      } else {
        this.board[x][y] = 'X';
        this.isCircle = true;
      }
    }
  }

  reset() {
    this.clear();
  }

  clear() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.isCircle = this.startWith.value;
  }

  undo() {}
}
