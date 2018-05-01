import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { StoreService } from '../../shared/store.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html',
  styleUrls: ['./header.style.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  // isLogin: Observable<boolean>;
  isLogin: boolean;
  subscription: Subscription;
  constructor(private storeSerive: StoreService,
    private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.authService.isAuth().subscribe(
      (isAuth: boolean) => {
        this.isLogin = isAuth;
      }
    );
  }

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

  logOff() {
    this.authService.logOff();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
