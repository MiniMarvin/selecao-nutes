import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  JSON = JSON;
  
  formControls = {
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9]+$/g)]),
    fatherName: new FormControl(''),
    motherName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    date: new FormControl('', [Validators.required]),
  }

  constructor(private router: Router) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(currentYear - 13, 11, 31);
  }

  ngOnInit(): void {
  }

  validateForm() {
    let err = 
      Object.keys(this.formControls)
        .map((key,_) => this.getErrorMessage(this.formControls[key], "") != "")
        .reduce((acc, val) => acc || val, false);
    if (err) {
      return;
    }

    let newUser = {
      name: this.formControls.name.value,
      username: this.formControls.username.value,
      fatherName: this.formControls.fatherName.value,
      motherName: this.formControls.motherName.value,
      date: this.formControls.date.value,
    }

    // make request
    this.router.navigate(['/']);
  }


  getErrorMessage(controlInput: FormControl, fieldName: String) {
    if (controlInput.hasError('required')) {
      return `O campo ${fieldName} não pode estar vazio`;
    }
    if (controlInput.hasError('minLength')) {
      return `O campo ${fieldName} precisa de no mínimo 3 caracteres`;
    }
    if (controlInput.hasError('pattern')) {
      return `O campo ${fieldName} só pode conter letras e números`;
    }

    return '';
  }
}
