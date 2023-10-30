import { Component } from '@angular/core';
import { IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol,
    IonList, IonItem, IonLabel, IonInput ],
})
export class HomePage {
  constructor() {}
}
