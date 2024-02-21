import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PhoneComponent} from "./components/phone/phone.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor() {

  }
  ngOnInit() {

  }
}
