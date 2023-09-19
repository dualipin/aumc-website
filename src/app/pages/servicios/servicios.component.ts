import { Component, OnInit } from '@angular/core';

import { ICard } from 'app/interfaces/ICard';
import { CARDS_SERVICIOS } from './CARDS';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent implements OnInit {

  //referencia a la interfaz ICard y a la constante CARDS_SERVICIOS
  cards: ICard[] = CARDS_SERVICIOS;

  constructor() { }

  ngOnInit(): void {
  }

}
