import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { MessageService } from 'primeng/api';

const templateParams = {
  name: 'James',
  notes: 'Check this out!'
};


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  subject!: string;
  message!: string;

  submitButtonBoolean: boolean = false;

  constructor(private messageService: MessageService) {
    this.changeInputEvent();
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  async sendEmail() {
    console.log("sendEmailButton trigered")
    console.log("Name: " + this.name);
    console.log("email: " + this.email);
    console.log("subject: " + this.subject);
    console.log("message: " + this.message);

    emailjs.init('Fty6c-ENJZXPuJMO0');
    await emailjs.send("service_20rmez9", "template_6r5iado", {
      from_name: this.name,
      to_name: "Mirza",
      from_email: this.email,
      from_subject: this.subject,
      message: this.message,
    }).then(res => {
      this.messageService.add({ severity: 'success', summary: 'Message sending', detail: 'Message has been sent' });
      console.log('Email successfully sent!')
    })
      .catch(err => this.messageService.add({ severity: 'error', summary: 'Message sneding', detail: 'Message sending fails' }));

    // Handle errors here however you like, or use a React error boundary


    //alert("Message has been sent");


  }

  validateEmail(emailAdress: string) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  }

  changeInputEvent() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.subject);
    console.log(this.message);
    if (this.name == "" || !this.name
      || this.email == "" || !this.email
      || this.subject == "" || !this.subject
      || this.message == "" || !this.message) {
      this.submitButtonBoolean = true;
    }
    else {
      this.submitButtonBoolean = false;
    }
  }

}
