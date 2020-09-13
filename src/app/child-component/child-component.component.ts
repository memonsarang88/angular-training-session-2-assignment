import { EventEmitter, Output, Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Output() submitted = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  nameChanged(nameInput : HTMLInputElement, reverseNameInput : HTMLInputElement) {
    reverseNameInput.value = nameInput.value.split("").reverse().join("");
  }

}