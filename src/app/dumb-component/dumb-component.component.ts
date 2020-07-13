import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dumb-component',
  templateUrl: './dumb-component.component.html',
  styleUrls: ['./dumb-component.component.css'],
})
export class DumbComponentComponent implements OnInit {
  @Output() onTdClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() user;

  constructor() {}

  ngOnInit(): void {}

  onNameClick(name) {
    this.onTdClick.emit(name);
  }
}
