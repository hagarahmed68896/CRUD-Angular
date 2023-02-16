import { DemoService } from './../../services/demo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
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
}
