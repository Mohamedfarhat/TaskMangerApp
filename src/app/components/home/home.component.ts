import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public taskServ: TaskService) { }

  ngOnInit(): void {
  }

  onDelete(id) {
    if (confirm("Are you sure to delete ?")) {
      this.taskServ.deleteTask(id);
    }
  }
}
