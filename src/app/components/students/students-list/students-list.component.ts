import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

    students: Student[] = [
      {
        id: 'S001',
        name: 'Kamal',
        email: 'kamal@gmail.com',
        phone: 712237423,
        grade: 10
        
      }
    ];
    
    constructor(){ }

    ngOnInit(): void{

      this.students.push()
    }
}
