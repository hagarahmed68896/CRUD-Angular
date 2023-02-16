import { DemoService } from './../../services/demo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 constructor(public myservice:DemoService, private router:Router) { }
 users:any
  ngOnInit(): void {
    this.myservice.getAllUsers().subscribe({
     next:(data)=> {
      this.users = data;
     },
     error:(error)=> {console.log(error)}
    })
  }
 
  deleteUser(id: any) {
    const index = this.users.findIndex((user: any) => user.id === id);
    this.users.splice(index, 1);

    this.myservice.deleteUser(id).subscribe({
      next: () => {
        console.log('User deleted successfully!');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }}
//   doUpdate(user){
//     this.myservice.updateUser(this.id,this.user).subscribe()
//     this.router.navigate(['/u']);
//   }
// }
