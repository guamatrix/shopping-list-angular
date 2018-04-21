import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBhM9tDDMp8YB8h6nPKPjT4ECsFkSrsAIk',
  authDomain: 'ng-recipe-book-255e2.firebaseapp.com',
  databaseURL: 'https://ng-recipe-book-255e2.firebaseio.com',
  projectId: 'ng-recipe-book-255e2',
  storageBucket: 'ng-recipe-book-255e2.appspot.com',
  messagingSenderId: '856628868197'
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp(config);
  }
}
