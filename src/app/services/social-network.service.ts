import { Injectable } from '@angular/core';
import ISocialNetwork from 'app/interfaces/ISocialNetwork';

@Injectable({
  providedIn: 'root',
})
export class SocialNetworkService {
  constructor() {}

  getSocialNetworks() {
    return [
      {
        name: 'facebook',
        url: 'https://www.facebook.com/aumc.services',
        icon: 'bi bi-facebook',
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/aumcservices.oficial/',
        icon: 'bi bi-instagram',
      },
      {
        name: 'whatsapp',
        url: 'https://api.whatsapp.com/send?phone=+522284208734&text=Hola,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios',
        icon: 'bi bi-whatsapp',
      },
      {
        name: 'correo',
        url: 'mailto:contacto@aumcservices.com',
        icon: 'bi bi-envelope',
      },
    ] as ISocialNetwork[];
  }
}
