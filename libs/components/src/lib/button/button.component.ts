import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Size } from '../../assets/type/size.type';
import { Tier } from '../../assets/type/tier.type';

@Component({
  selector: 'glx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() tier: Tier;
  @Input() size: Size;
  

  sizeClass: string;

  constructor() { }


  ngOnInit(): void {
    this.sizeClass = this.size ? `btn-${this.size}` : '';
  }

  @HostListener('click')
  buttonClick(): void {
    console.log('[ButtonComponent] [LOG] boton clickeado');
  }

}
