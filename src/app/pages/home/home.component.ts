import { Component, OnInit } from '@angular/core';
import { CARDS_SERVICIOS, CARDS_VENTAJAS } from './CARDS';
import { ICard } from 'app/interfaces/ICard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  cardsVentajas: ICard[] = CARDS_VENTAJAS;
  cardsServicios: ICard[] = CARDS_SERVICIOS;


  constructor() { }


  ngOnInit(): void {
  }

}
