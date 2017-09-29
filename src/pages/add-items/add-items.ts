import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { firebaseServices } from '../../services/firebase.services'
import { HomePage } from '../home/home';

/**
 * Generated class for the AddItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-items',
  templateUrl: 'add-items.html',
})
export class AddItemsPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private de:firebaseServices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemsPage');
  }

  openPage(pagedtl: string){
  	this.navCtrl.push(pagedtl);
  }

  doLogout()
  {
    this.de.logoutUser().then(() => {
        this.navCtrl.setRoot(HomePage);
    });

  }
  
}
