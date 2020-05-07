import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray,Validators,ReactiveFormsModule, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userForm:FormGroup;
  get = [];
  filteredStates=[];
  filteredCities=[];
  nations=[
    {
      code:"IN",
      name:"india"
    },
    {
      code:"US",
      name:"america"
    },
  ]
  states=[
    {
      code:"TN",
      name:"Tamil Nadu",
      countrycode:"IN"
    },
    {
      code:"KL",
      name:"Kerala",
      countrycode:"IN"
    },
    {
      code:"WS",
      name:"Washington",
      countrycode:"US"
    },
    {
      code:"NY",
      name:"New York",
      countrycode:"US"
    },
  ]
  cities=[
    {
      code:"TN",
      name:"chennai",
      countrycode:"IN"
    },
    {
      code:"KL",
      name:"kochi",
      countrycode:"IN"
    },
    {
      code:"KL",
      name:"kozhikode",
      countrycode:"IN"
    },
    {
      code:"TN",
      name:"Madurai",
      countrycode:"IN"
    },
    {
      code:"NY",
      name:"new york 1",
      countrycode:"US"
    },
    {
      code:"NY",
      name:"new york 2",
      countrycode:"US"
    },
    {
      code:"WS",
      name:"washington city1",
      countrycode:"US"
    },
    {
      code:"WS",
      name:"washington city2",
      countrycode:"US"
    },
  ]
  constructor(
    private fb:FormBuilder
    ) { 
    this.userForm = this.fb.group({
      'name': this.fb.control(''),
      'email': this.fb.control(''),
      'Password': this.fb.control(''),
      'Gender': this.fb.control(''),
      'status': this.fb.control(''),
      'nation': this.fb.control(''),
      'state': this.fb.control(''),
      'city': this.fb.control(''),
    })
   
  }
  
  ngOnInit(): void {
    this.userForm.get('nation').valueChanges.subscribe(nationdata =>{
       let pass = this.states.filter(state => state.countrycode == nationdata);
      this.filteredStates = pass;
    })
    this.userForm.get('state').valueChanges.subscribe(stateData =>{
      let statesData = this.cities.filter(city => city.code == stateData);
      console.log(statesData);
      this.filteredCities = statesData;
   })
    
  }
  
  onSubmit() {
    console.log(this.userForm.value);
}
}
