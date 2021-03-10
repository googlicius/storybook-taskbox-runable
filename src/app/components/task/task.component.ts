import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  title: string;
  @Input() task: any;

  @Output() onPinTask: EventEmitter<any> = new EventEmitter();
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  onPin(id: any) {
    this.onPinTask.emit(id);
  }

  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
