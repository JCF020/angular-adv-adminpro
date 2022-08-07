import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grafical1',
  templateUrl: './grafical1.component.html',
  styles: [],
})
export class Grafical1Component {
  public labels1: string[] = [
    'Ventas Junio',
    'Ventas Julio',
    'Ventas Agosto',
  ];

  public data1 = [500, 200, 50];
}
