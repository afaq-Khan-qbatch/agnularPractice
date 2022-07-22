import { Component } from '@angular/core';

import { Hero } from 'src/app/lib/utils/hero';

import {FormArray, FormControl, FormGroup} from '@angular/forms'; //reactive froms

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

//   title: string = 'Forms';              //reactive froms
//   SignIn = new FormGroup({      //reactive froms
//   email: new FormControl(''),   //reactive froms
//   pwd: new FormControl('')      //reactive froms
//  })
//  email: string = '';
//  pwd: string = ''
  newHero() {
    this.model = new Hero(42, '', '');
  }
}