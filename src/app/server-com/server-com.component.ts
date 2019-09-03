import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-com',
  templateUrl: './server-com.component.html',
  styleUrls: ['./server-com.component.css']
})
export class ServerComComponent implements OnInit {

  XMLreq = new XMLHttpRequest();

  

  constructor() { }

  ngOnInit() {
  }

}
