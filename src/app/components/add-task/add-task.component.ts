import { Task } from './../../interfaces/task';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskSer: TaskService, private router: Router) { }
  // new for template driven form
  task = {
    title: '',
    description: ''
  };

  ngOnInit(): void {
  }

  onSubmit(myform) {
    if(myform.valid){
      this.taskSer.addtask(this.task);
      this.router.navigate(['/']);
    }
  }

  reset(myform){
    myform.reset();
  }
  //get with attribute value
  /*onSubmit(title, description) {
    this.taskSer.addTask(title.value, description.value);
    this.router.navigate(['/']);
  }*/
}
