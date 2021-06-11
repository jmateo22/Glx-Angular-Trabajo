import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'glx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() brand:string;

  constructor() { }

  ngOnInit(): void {
  }

}
