import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  JSON = JSON;
  addOrEdit = 'add';
  userData: User;

  formControls = {
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z0-9]*$/i)]),
    fatherName: new FormControl(''),
    motherName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    date: new FormControl('', [Validators.required]),
  };

  constructor(private router: Router, private userService: UserService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(currentYear - 13, 11, 31);
  }

  ngOnInit(): void {
    const data = history.state.data;
    if (data !== undefined) {
      console.log('--------------');
      console.log(data);
      this.userData = data;

      this.formControls.name.setValue(data.name);
      this.formControls.username.setValue(data.username);
      this.formControls.fatherName.setValue(data.fatherName);
      this.formControls.motherName.setValue(data.motherName);
      this.formControls.date.setValue(new Date(data.birthDate));
      this.addOrEdit = 'edit';
    }
  }

  async validateForm() {
    const err =
      Object.keys(this.formControls)
        // tslint:disable-next-line: triple-equals
        .map((key, _) => this.getErrorMessage(this.formControls[key], '') != '')
        .reduce((acc, val) => acc || val, false);
    if (err) {
      return;
    }

    const newUser: User = {
      id: this.userData ? this.userData.id : 0,
      name: this.formControls.name.value,
      username: this.formControls.username.value,
      fatherName: this.formControls.fatherName.value,
      motherName: this.formControls.motherName.value,
      birthDate: this.formControls.date.value,
    };

    if (this.addOrEdit === 'edit') {
      await this.userService.updateUser(newUser).toPromise();
    } else {
      await this.userService.createUser(newUser).toPromise();
    }

    // make request
    this.router.navigate(['/']);
  }

  deleteUser() {
    console.log('delete');
  }


  getErrorMessage(controlInput: FormControl, fieldName: string) {
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
