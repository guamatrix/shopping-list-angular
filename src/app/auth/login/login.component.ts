import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseService } from '../../shared/response.service';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  isLogin: boolean;
  notError: boolean;
  menssage: string;
  subscription: Subscription[] = [];
  constructor(private route: ActivatedRoute,
    private responseService: ResponseService,
    private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
    this.subscription.push(this.route.url.subscribe(
      (url: UrlSegment[]) => {
        this.isLogin = url[0].path === 'login';
      }
    ));

    this.subscription.push(this.responseService.fireResponse.subscribe(
      (status) => {
        console.log(status, this.isLogin);
        this.menssage = status.menssage;
        this.notError = status.ok;
      }
    ));
  }

  initForm() {
    this.formLogin = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.formLogin);
    const { email, password } = this.formLogin.value;
    if (this.isLogin) {
      this.authService.login(email, password);
    } else {
      this.authService.signup(email, password);
    }
  }

  ngOnDestroy() {
    this.subscription.map(sub => sub.unsubscribe());
  }
}
