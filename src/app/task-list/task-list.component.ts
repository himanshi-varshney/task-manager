import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'demo_project';
  displayCard: boolean = false;
  taskList: any = [{
    name: 'Todo',
    tasks: [
      "Pay Electricity Bill",
      "Make grocery list"
    ],
    displayCardInputArea: false
  }, {
    name: 'InProgress',
    tasks: [
      "Iron clothes"
    ],
    displayCardInputArea: false
  }, {
    name: 'Done',
    tasks: [
      "Buy running shoes"
    ],
    displayCardInputArea: false
  }];
  newTask: any = { name: '', tasks: [], displayCardInputArea: false };
  cardName: string = '';


  invokeBox() {
    this.displayCard = true;
  }

  removeTask() {
    this.displayCard = false;
    this.refreshNewTask();
  }
  removeCard(taskCard: any) {
    taskCard.displayCardInputArea = false;
    this.cardName = "";
  }

  addTask() {
    this.taskList.push(this.newTask);
    this.removeTask();
  }

  invokeCard(taskCard: any) {
    taskCard.displayCardInputArea = true;
  }

  addCard(taskCard: any) {
    taskCard.tasks.push(this.cardName);
    this.removeCard(taskCard);
  }

  refreshNewTask() {
    this.newTask = {
      name: '', tasks: [], displayCardInputArea: false
    }
  }

}
