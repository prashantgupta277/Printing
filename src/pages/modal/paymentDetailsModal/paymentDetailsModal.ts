import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-paymentDetailsModal',
  templateUrl: 'paymentDetailsModal.html'
})
export class PaymentDetailsModalPage {
  constructor(public navCtrl: NavController,
              private statusBar: StatusBar,
              public viewCtrl: ViewController) {
    
  }
  saveData() {
    this.viewCtrl.dismiss();
  }
}
