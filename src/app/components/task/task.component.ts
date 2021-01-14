import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  taskId;

  selectedTask;

  constructor(private route: ActivatedRoute, private taskSer: TaskService, private router: Router) {
  }

  ngOnInit(): void {
    //this.selectedTask = this.taskSer.tasks[this.taskId];

    this.taskId = this.route.snapshot.paramMap.get('id');
    this.selectedTask = this.taskSer.findTask(this.taskId);

  }

  onEdit() {
    this.taskSer.editTask(this.taskId, this.selectedTask);
    this.router.navigate(['/']);
  }

  onDelete() {
    if (confirm("Are you sure to delete ?")) {
      this.taskSer.deleteTask(this.taskId);
      this.router.navigate(['/']);
    }
  }

}
