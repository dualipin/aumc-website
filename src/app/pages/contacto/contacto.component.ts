import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SocialNetworkService } from 'app/services/social-network.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {

  formContacto = new FormGroup({
    nombre: new FormControl('', { validators: Validators.required }),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required),
  });

  constructor(private sn: SocialNetworkService) {}

  socialNetworks = this.sn.getSocialNetworks();

  isActiveModal = false

  formSubmit() {
    this.isActiveModal = true
  }

  deactivateModal(){
    this.isActiveModal = false
  }
}