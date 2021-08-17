import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPerson } from 'src/app/Contracts/IUserLogin';
import { UserLoginService } from 'src/app/Services/UserLoginService';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  date1: Date;
  pesronForm: FormGroup;
  person: IPerson;
  EditMode=false;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userLoginService: UserLoginService,
    private personFB: FormBuilder,

  ) { }
  createForm() {
    this.pesronForm = this.personFB.group({
       
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      country: [null, [Validators.required]],
      avatar: ["https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"],
    });



  }
  ngOnInit(): void {
    this.createForm();
  }
  async Submit() {
    if(!this.pesronForm.valid){
      alert("Form is Invalid");
    }else{
      var body:IPerson = this.pesronForm.value;
      try{
        if(!this.EditMode)
        var response = await this.userLoginService.Addpesron(body);
        alert("success");
      }catch(e){
        console.log(e);
        alert(e);
      }

    }
  }
  goback() {
    history.back();
  }

  
}
