import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from, Subject } from 'rxjs';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    from:"",
    to:"",
    subject:"",
    message:""
  }
  flag=false;

  constructor(private email:EmailService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }
  doSubmitForm(){
    console.log("try to submit");
    console.log("Data",this.data);
    if(this.data.from==""||this.data.to==""||this.data.subject=="")
    {
      this.snak.open("fields can't be empty","cancel");
      return;
    }
    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      Response=>{
        console.log(Response);
        this.flag=false;
        this.snak.open("email has been successfully sent","cancel");
      },
      error=>{
        console.log(error);
        this.flag=false;
        this.snak.open("email has been successfully sent","cancel");
      }
        )
      }
}
