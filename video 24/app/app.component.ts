import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    template:`<h1> {{title}}</h1>
               <ul>
               <a routerLink="/heroes">Mostrar lista heroes</a>
               <a routerLink="/dashboard">Mostrar DashBoard</a>
                </ul>
              <router-outlet></router-outlet>`
})

export class AppComponent{

    public title = 'Vuelta de los Heroes';
}