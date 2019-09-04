import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  uForm = new FormGroup ({
    uName: new FormControl('', Validators.required),
  });

  onSubmit(){
    console.warn(this.uForm.value);
  }

  constructor() { }

  ngOnInit() {
  }
}
