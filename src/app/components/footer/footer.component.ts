import { Component } from '@angular/core';
import SocialNetwork from 'app/interfaces/ISocialNetwork';
import { SocialNetworkService } from 'app/services/social-network.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(public sn: SocialNetworkService) {}

  socialNetworks: SocialNetwork[] = this.sn.getSocialNetworks();
}
