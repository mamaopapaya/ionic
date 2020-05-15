import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  //propriedade do componente
  @Input() titulo:string;

  constructor() { }

  ngOnInit() {}

}
