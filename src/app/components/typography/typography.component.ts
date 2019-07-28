import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from  'rxjs';
import { map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  typography: boolean = false;
  formInput: boolean = false;
  selectedValue : string ;
  optionsAutocomplete : string[] = ['ravi','ram','sachin'];
  filteredOption : Observable<string[]>;
  constructor() { }
   
  MyControl = new FormControl();
  ngOnInit() {
    this.filteredOption = this.MyControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }
   private _filter(value : string): string[]{
     const filerValue = value.toLowerCase();
     return this.optionsAutocomplete.filter(option =>{
       option.toLowerCase().includes(filerValue)
     })
   }
  formInputOpen() {
    this.formInput = true;
    this.typography = false;
  }
  typographyOpen() {
    this.formInput = false;
    this.typography = true;
  }
}