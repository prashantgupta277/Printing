import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { PSRPage } from '../psr/psr';
import { UserService } from '../../providers/user-service';
import { FileTransfer , FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-psrGenerate',
  templateUrl: 'psrGenerate.html'
})
export class PSRGeneratePage {
  userInfo:any;
  SendReq:any;
  FileType:any;
  FileName:any;
  imageURI:any;
  Filepath:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService: UserService,
              public toastCtrl: ToastController,
              public fileTransfer:FileTransfer,
              public camera: Camera,
              public loadingCtrl: LoadingController,
              public platform: Platform
              ) {
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.SendReq = {
      "title":"",
      "message":"",
      "user_id":this.userInfo.user_id,
      "file":"",
    }
   
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(PSRPage);
    }, 0)
  }

  // -----SelectFile-----
  SelectFile(){
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    destinationType: this.camera.DestinationType.FILE_URI,
    mediaType:this.camera.MediaType.ALLMEDIA
    // mediaType:this.camera.MediaType.VIDEO
    }).then((imageData) => {
      this.imageURI ="file://"+imageData; //Get File Path
      this.SendReq.file = imageData;
      this.presentToast("File Selected");
    });
    loading.dismiss();
  }
  // -----SelectFile-----

  remove(){
    this.SendReq.file = "";
  }
  // -----AddPersonalReq-----

  AddPersonal(){
    if(this.SendReq.title == ""){
      this.presentToast("Please Insert Title");
      return false;
    }
    if(this.SendReq.message == ""){
      this.presentToast("Please Insert Message");
      return false;
    }
    if(this.SendReq.file == ""){
      this.presentToast("Please Select File");
      return false;
    }
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.AddPersonalService(this.SendReq).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        this.presentToast(res.message);
       this.navCtrl.setRoot(PSRPage);
      }
      else{
        this.presentToast(res.message);
      }
    },err=>{
      loading.dismiss();
    })
  }
  // -----AddPersonalReq-----
  
  back(){
    this.navCtrl.setRoot(PSRPage);
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
