import { Component } from '@angular/core';
import { Response } from '@angular/http';


import { StoreService } from '../../shared/store.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html',
  styleUrls: ['./header.style.css']
})

export class HeaderComponent {
  constructor(private storeSerive: StoreService,
    private authService: AuthService) {}

  onSaveData() {
    this.storeSerive.saveStore()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.storeSerive.getStore();
  }

  isLogged() {
    return this.authService.isAuth();
  }

  logOff() {
    this.authService.logOff();
  }
}
