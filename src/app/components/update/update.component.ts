import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from './../../services/demo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  Id=0
  user:any
 constructor(public myActivate:ActivatedRoute, public myservice:DemoService){
  this.Id=this.myActivate.snapshot.params['id']
 }
  ngOnInit(): void {
    this.myservice.getUser(this.Id).subscribe({
      next:(data)=>{
        this.user=data;
      },
      error:(err)=>{console.log(err)}
    })
  }

  onSubmit() {

    this.myservice.updateUser(this.Id,this.user).subscribe({
      next: (data) => {
  
      },
    });
  }
  
}

