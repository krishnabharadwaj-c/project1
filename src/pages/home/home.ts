import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddItemsPage } from '../add-items/add-items';
import { firebaseServices } from '../../services/firebase.services'

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private email: string;
  private password: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public df: firebaseServices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  doLogin(){
    this.df.loginUser(this.email, this.password).then(authData=>
    {
      //successful
      this.navCtrl.setRoot(AddItemsPage);
    }), error => {
      alert("error logging"+error.message);
    }
    
  }

 }
