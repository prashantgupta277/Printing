import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, ToastController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../../../providers/user-service';

@Component({
  selector: 'page-advancedSettingModal',
  templateUrl: 'advancedSettingModal.html'
})
export class AdvancedSettingModalPage {
  userInfo:any;
  machinestandby:any=[];
  machinestandbyValue:any;
  zmotor:any=[];
  zmotorValue:any;
  tiltmotor:any=[];
  tiltmotorVlaue:any;
  zposition:any=[];
  zpositionValue:any;
  lampstatus:any=[];
  lampstatusValue:any;
  fan:any=[];
  fanValue:any;
  machinestatus:any;
  constructor(public navCtrl: NavController,
              private statusBar: StatusBar,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public toastCtrl: ToastController,
              public platform: Platform) {
    
  }
 
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.viewCtrl.dismiss();
    }, 0)
    this.fan={
      "off":false,
      "yes":false,
    }
    this.lampstatus={
      "off":false,
      "yes":false,
    }
    this.zposition={
      "TOP":false,
      "BOTTOM":false,
    }
    this.machinestandby={
      "no":false,
      "yes":false,
    }
    this.zmotor={
      "stopped":false,
      "paused":false,
      "running":false,
    }
    this.tiltmotor = {
      "stopped":false,
      "paused":false,
      "running":false,
    }
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    let data={
      "country": this.userInfo.country,
      "user_id" : this.userInfo.user_id
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.getAdvanceSettingDetail(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        console.log(res);
        this.machinestatus =res.data[0].machine_status;
        this.tiltmotorstatusSelect(res.data[0].tilt_motor)
        this.zmotorstatusSelect(res.data[0].z_motor)
        this.machinestandbystatusSelect(res.data[0].standby)
        this.zpositionstatusSelect(res.data[0].z_position)
        this.lampstatusSelect(res.data[0].lamp_status)
        this.fanValueSelect(res.data[0].fan);
      }else{

      }
      
    },err=>{
      loading.dismiss();
    })
    
  }
  tiltmotorstatusSelect(value){
    console.log(value);
    
    if(value == "0"){
      this.tiltmotor = {
        "stopped":true,
        "paused":false,
        "running":false,
      }
      this.tiltmotorVlaue = "0";
    }
    if(value == "1"){
      this.tiltmotor = {
        "stopped":false,
        "paused":true,
        "running":false,
      }
      this.tiltmotorVlaue = "1";
    }
    if(value == "2"){
      this.tiltmotor = {
        "stopped":false,
        "paused":false,
        "running":true,
      }
      this.tiltmotorVlaue = "2";
    }
  }
  zmotorstatusSelect(value){
    console.log(value);
    
    if(value == "0"){
      this.zmotor = {
        "stopped":true,
        "paused":false,
        "running":false,
      }
      this.zmotorValue = "0";
    }
    if(value == "1"){
      this.zmotor = {
        "stopped":false,
        "paused":true,
        "running":false,
      }
      this.zmotorValue = "1";
    }
    if(value == "2"){
      this.zmotor = {
        "stopped":false,
        "paused":false,
        "running":true,
      }
      this.zmotorValue = "2";
    }
  }
  machinestandbystatusSelect(value){
    console.log(value);
    
    if(value == "No"){
      this.machinestandby={
        "no":true,
        "yes":false,
      }
      this.machinestandbyValue = "No";
    }
    if(value == "Yes"){
      this.machinestandby={
        "no":false,
        "yes":true,
      }
      this.machinestandbyValue = "Yes";
    }
  }
  zpositionstatusSelect(value){
    console.log(value);
    
    if(value == "TOP"){
      this.zposition={
        "TOP":true,
        "BOTTOM":false,
      }
      this.zpositionValue = "TOP";
    }
    if(value == "BOTTOM"){
      this.zposition={
        "TOP":false,
        "BOTTOM":true,
      }
      this.zpositionValue = "BOTTOM";
    }
  }

  lampstatusSelect(value){
    console.log(value);
    
    if(value == "0"){
      this.lampstatus={
        "off":true,
        "yes":false,
      }
      this.lampstatusValue = "0";
    }
    if(value == "1"){
      this.lampstatus={
        "off":false,
        "yes":true,
      }
      this.lampstatusValue = "1";
    }
  }

  fanValueSelect(value){
    console.log(value);
    if(value == "0"){
      this.fan={
        "off":true,
        "yes":false,
      }
      this.fanValue = "0";
    }
    if(value == "1"){
      this.fan={
        "off":false,
        "yes":true,
      }
      this.fanValue = "1";
    }
  }
  saveData() {
    let data ={
      "standby":this.machinestandbyValue,
      "z_position":this.zpositionValue,
      "tilt_motor":this.tiltmotorVlaue,
      "z_motor":this.zmotorValue,
      "lamp_status":this.lampstatusValue,
      "fan":this.fanValue,
      "machine_status":this.machinestatus,
      "printer_id":this.userInfo.user_id
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.addAdvanceSettingDetail(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        console.log(res);
        this.presentToast(res.message);
        this.viewCtrl.dismiss();
      }else{

      }
    },err=>{
      loading.dismiss();
    })
    
  }
  /// Toast function ////
  private presentToast(text) {
    let toast = this.toastCtrl.create({
    message: text,
    duration: 1000,
    position: 'bottom',
    cssClass: 'normalToast'
    });
    toast.present();
  }
}
