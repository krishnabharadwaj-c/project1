import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class firebaseServices{

email:any;
password:any;
public fireAuth: any;

constructor (private df:AngularFireDatabase)
{
	this.fireAuth = firebase.auth();
}

loginUser(email: string, password: string)
{
	return this.fireAuth.signInWithEmailAndPassword(email, password);
}


logoutUser()
{
	return this.fireAuth.signOut();
	
}

}
