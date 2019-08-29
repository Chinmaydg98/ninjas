import { Component, OnInit } from '@angular/core';
import { NinjaClass } from './ninja';
import { NList } from './ninjasList';

@Component({
  selector: 'app-ninjas',
  templateUrl: './ninjas.component.html',
  styleUrls: ['./ninjas.component.css']
})
export class NinjasComponent implements OnInit {

  ninja: NinjaClass = {
    id: 4232,
    name: "Shinobi"
  }

  list = NList;

  selectedNinja: NinjaClass;
  onSelect(ninjaF: NinjaClass): void{
    this.selectedNinja = ninjaF;
  }

  constructor() { }
  ngOnInit() {
  }

}
