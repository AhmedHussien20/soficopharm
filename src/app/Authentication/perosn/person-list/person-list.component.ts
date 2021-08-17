import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPerson } from 'src/app/Contracts/IUserLogin';
import { UserLoginService } from 'src/app/Services/UserLoginService';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  person: any[] = [];

  
  constructor(private userLoginService:UserLoginService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.userLoginService.getAllPerson().subscribe(res => 
      this.person = res.body
     
      );
      
     
  }
  Create(){
   this.router.navigate(['/Add']);
  }

}
