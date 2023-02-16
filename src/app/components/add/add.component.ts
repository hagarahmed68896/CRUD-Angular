import { DemoService } from './../../services/demo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(public myservice:DemoService){

  }
add(name:any, email:any, age:any){
 let user = {name, email, age}
 this.myservice.addUser(user).subscribe();
  }
}
