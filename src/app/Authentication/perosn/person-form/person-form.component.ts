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
  mode: string;
  requestId: number = 0;
  personRequest: any = {};
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userLoginService: UserLoginService,
    private personFB: FormBuilder,

  ) { 
    this.mode = this.route.snapshot.data.mode;
  }
  createForm() {
    this.pesronForm = this.personFB.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      country: [null, [Validators.required]],
      avatar: ["https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"],
    });
  }
  EditForm() {
    this.pesronForm = this.personFB.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      country: [null, [Validators.required]],
      avatar: ["https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"],
    });
  }
  ngOnInit(): void {
    if (this.mode == "edit") {
      this.EditMode=true;
      this.requestId = this.route.snapshot.params['id'];
      this.getpersonbyId();
    }
    this.createForm();
  }
  getpersonbyId(){
    this.userLoginService.getById(this.requestId).subscribe((res) => {
      this.personRequest=res
    });
  }
  async Submit() {
    if(!this.pesronForm.valid){
      alert("Form is Invalid");
    }else{
      var body:IPerson = this.pesronForm.value;
      try{
        if(!this.EditMode)
        var response = await this.userLoginService.Addpesron(body);
        else{
        var response = await this.userLoginService.Edit(body,this.requestId);

        }
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
