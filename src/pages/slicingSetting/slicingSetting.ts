import { Component } from '@angular/core';
import { NavController, LoadingController,  NavParams, ToastController, Platform } from 'ionic-angular';
import { collectionPage } from '../collection/collection';
import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-slicingSetting',
  templateUrl: 'slicingSetting.html'
})
export class SlicingSettingPage {
  userInfo:any;
  materialListArray:any=[];
  materialValue:any;
  mainData:any=[];
  print:any=[];
  slicing:any=[];
  enable_slicing_outlineArray:any=[];
  generate_supportArray:any=[];
  id:any;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public NavParams: NavParams,
              public toastCtrl:ToastController,
              public platform: Platform
              ) {
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(collectionPage);
    }, 0)
    this.id = this.NavParams.get("FileId")
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.loadFile(this.id);
  }
  loadFile(id){
    this.enable_slicing_outlineArray = {
      "yes":false,
      "no":false
    }
    this.generate_supportArray = {
      "yes":false,
      "no":false
    }
    let data ={
      "file_id":id,
      "user_id":this.userInfo.user_id,
      "country":this.userInfo.country,
      "language_id":this.userInfo.language_id,
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.EditFileInMyCollection(data).subscribe(res=>{
      if(res.status=="true" || res.status== true){
        console.log(res);
        this.mainData = res.data[0];
        this.print = res.print[0];
        this.slicing = res.slicing[0];
        this.enable_slicing_outlineArrayValueSet(this.slicing.enable_slicing_outline);
        this.generate_supportArrayValueSet(this.slicing.generate_support);
        this.MatrialLoad();
        loading.dismiss();
        
      }else{

      }
    },err=>{
      console.log(err);
    })
    
  }
  enable_slicing_outlineArrayValueSet(value){
    if(value == '1'){
      this.enable_slicing_outlineArray = {
        "yes":true,
        "no":false
      }
      this.slicing.enable_slicing_outline = 1;
    }
    else{
      this.enable_slicing_outlineArray = {
        "yes":false,
        "no":true
      }
      this.slicing.enable_slicing_outline = 0;
    }

  }

  generate_supportArrayValueSet(value){
    if(value == '1'){
      this.generate_supportArray = {
        "yes":true,
        "no":false
      }
      this.slicing.generate_support = "Yes";
    }
    else{
      this.generate_supportArray = {
        "yes":false,
        "no":true
      }
      this.slicing.generate_support = "No";
    }

  }
  

  MatrialLoad(){
    let data={
      "country": this.userInfo.country,
      "user_id" : this.userInfo.user_id
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
      content: 'Checking File...'
    });
    this.userService.materialList(data).subscribe(res=>{
      this.materialListArray = [];
      if(res.status=="true" || res.status== true){
        this.materialListArray = res.data;
        this.materialValue = this.materialListArray[0].id;
        console.log(this.materialListArray);
        console.log(this.materialValue);
      }else{

      }
    },err=>{
      console.log(err);
    })
    
  }

  // ======PrintIncreeFuction======
  PrintIncress(value){
     // ----layer_thickness---
    if(value == "layer_thickness"){
      this.print.layer_thickness++;
      
    }
     // ----exposure_time---
    if(value == "exposure_time"){
      this.print.exposure_time++;
      
    }
     // ----off_time---
    if(value == "off_time"){
      this.print.off_time++;
      
    }
     // ----bottom_exposure_time---
    if(value == "bottom_exposure_time"){
      this.print.bottom_exposure_time++;
      
    }
     // ----bottom_layers---
    if(value == "bottom_layers"){
      this.print.bottom_layers++;
      
    }
     // ----post_cure_time---
    if(value == "post_cure_time"){
      this.print.post_cure_time++;
      
    }
    // ----lift_and_sequence_time---
    if(value == "lift_and_sequence_time"){
      this.print.lift_and_sequence_time++;
      
    }
    // ----z_lift_distance-----
    if(value == "z_lift_distance"){
      this.print.z_lift_distance++;
      
    }

    // --------z_lift_speed-----
    if(value == "z_lift_speed"){
      this.print.z_lift_speed++;
      
    }

    // ------z_bottom_speed-------
    if(value == "z_bottom_speed"){
      this.print.z_bottom_speed++;
      
    }

    // -------z_bottom_retract_speed------
    if(value == "z_bottom_retract_speed"){
      this.print.z_bottom_retract_speed++;
      
    }

    // ------slide_tilt-------------
    if(value == "slide_tilt"){
      this.print.slide_tilt++;
      
    }

    // ---------reflect_x-------
    if(value == "reflect_x"){
      this.print.reflect_x++;
      
    }

    // ------reflect_y----------
    if(value == "reflect_y"){
      this.print.reflect_y++;
      
    }
    
  }
  // ======PrintIncreeFuction=======

  // ======PrintDecressFuction======
  PrintDecress(value){
    let msg = value+" Value Should not be less then Zero";
    // -----layer_thickness------
    if(value == "layer_thickness"){
      if( this.print.layer_thickness != "" && this.print.layer_thickness != 0 ){
        this.print.layer_thickness--;
      }else{
        this.presentToast(msg)
      }
    }
    // -----exposure_time------
    if(value == "exposure_time"){
      if( this.print.exposure_time != "" && this.print.exposure_time != 0 ){
        this.print.exposure_time--;
      }else{
        this.presentToast(msg)
      }
    }
    
    // -----off_time------
    if(value == "off_time"){
      if( this.print.off_time != "" && this.print.off_time != 0 ){
        this.print.off_time--;
      }else{
        this.presentToast(msg)
      }
    }

    // -----bottom_exposure_time------
    if(value == "bottom_exposure_time"){
      if( this.print.bottom_exposure_time != "" && this.print.bottom_exposure_time != 0 ){
        this.print.bottom_exposure_time--;
      }else{
        this.presentToast(msg)
      }
    }

    // -----bottom_layers------
    if(value == "bottom_layers"){
      if( this.print.bottom_layers != "" && this.print.bottom_layers != 0 ){
        this.print.bottom_layers--;
      }else{
        this.presentToast(msg)
      }
    }
    // -----post_cure_time------
    if(value == "post_cure_time"){
      if( this.print.post_cure_time != "" && this.print.post_cure_time != 0 ){
        this.print.post_cure_time--;
      }else{
        this.presentToast(msg)
      }
    }

    // ----lift_and_sequence_time---
    if(value == "lift_and_sequence_time"){
      if( this.print.lift_and_sequence_time != "" && this.print.lift_and_sequence_time != 0 ){
        this.print.lift_and_sequence_time--;
      }else{
        this.presentToast(msg)
      }
    }

    // -----z_lift_distance---------
    if(value == "z_lift_distance"){
      if( this.print.z_lift_distance != "" && this.print.z_lift_distance != 0 ){
        this.print.z_lift_distance--;
      }else{
        this.presentToast(msg)
      }
    }
    
    // --------z_lift_speed--------
    if(value == "z_lift_speed"){
      if( this.print.z_lift_speed != "" && this.print.z_lift_speed != 0 ){
        this.print.z_lift_speed--;
      }else{
        this.presentToast(msg)
      }
    }

    // -------z_bottom_speed-----
    if(value == "z_bottom_speed"){
      if( this.print.z_bottom_speed != "" && this.print.z_bottom_speed != 0 ){
        this.print.z_bottom_speed--;
      }else{
        this.presentToast(msg)
      }
    }
    
    // -----z_bottom_retract_speed----

    if(value == "z_bottom_retract_speed"){
      if( this.print.z_bottom_retract_speed != "" && this.print.z_bottom_retract_speed != 0 ){
        this.print.z_bottom_retract_speed--;
      }else{
        this.presentToast(msg)
      }
    }

    // -----slide_tilt---------
    if(value == "slide_tilt"){
      if( this.print.slide_tilt != "" && this.print.slide_tilt != 0 ){
        this.print.slide_tilt--;
      }else{
        this.presentToast(msg)
      }
    }

    // -------reflect_x---------
    if(value == "reflect_x"){
      if( this.print.reflect_x != "" && this.print.reflect_x != 0 ){
        this.print.reflect_x--;
      }else{
        this.presentToast(msg)
      }
    }

    // -----reflect_y---------
    if(value == "reflect_y"){
      if( this.print.reflect_y != "" && this.print.reflect_y != 0 ){
        this.print.reflect_y--;
      }else{
        this.presentToast(msg)
      }
    }


  }
  // ======PrintDecressFuction======
 
  // ======slicingIncreeFuction======
  slicingIncree(value){
     // ----layer_thickness---
    if(value == "infill_density"){
      this.slicing.infill_density++;
    }

    // --infill_line_distance------
    if(value == "infill_line_distance"){
      this.slicing.infill_line_distance++;
    }

    // ----infill_overlap_percentage----
    if(value == "infill_overlap_percentage"){
      this.slicing.infill_overlap_percentage++;
    }

    // ---infill_layer_thickness------
    if(value == "infill_layer_thickness"){
      this.slicing.infill_layer_thickness++;
    }

    // ------support_overhang_angle------
    if(value == "support_overhang_angle"){
      this.slicing.support_overhang_angle++;
    }

    // ------support_density----------
    if(value == "support_density"){
      this.slicing.support_density++;
    }

    // --------support_horizontal_expansion----
    if(value == "support_horizontal_expansion"){
      this.slicing.support_horizontal_expansion++;
    }

    // -------support_infill_layer_thickness----
    if(value == "support_infill_layer_thickness"){
      this.slicing.support_infill_layer_thickness++;
    }

    // ----gradual_support_infill_steps-----
    if(value == "gradual_support_infill_steps"){
      this.slicing.gradual_support_infill_steps++;
    }


  }
  // ======slicingIncreeFuction======

  // ======slicingDecreeFuction======
  slicingDecree(value){
    
    let msg = value+" Value Should not be less then Zero";
    // -----infill_density------
    if(value == "infill_density"){
      if( this.slicing.infill_density != "" && this.slicing.infill_density != 0 ){
        this.slicing.infill_density--;
      }else{
        this.presentToast(msg)
      }
    }

    // ------infill_line_distance------
    if(value == "infill_line_distance"){
      if( this.slicing.infill_line_distance != "" && this.slicing.infill_line_distance != 0 ){
        this.slicing.infill_line_distance--;
      }else{
        this.presentToast(msg)
      }
    }

    // ------infill_overlap_percentage--
    if(value == "infill_overlap_percentage"){
      if( this.slicing.infill_overlap_percentage != "" && this.slicing.infill_overlap_percentage != 0 ){
        this.slicing.infill_overlap_percentage--;
      }else{
        this.presentToast(msg)
      }
    }

    // -----infill_layer_thickness----
    if(value == "infill_layer_thickness"){
      if( this.slicing.infill_layer_thickness != "" && this.slicing.infill_layer_thickness != 0 ){
        this.slicing.infill_layer_thickness--;
      }else{
        this.presentToast(msg)
      }
    }

    // -----support_overhang_angle----
    if(value == "support_overhang_angle"){
      if( this.slicing.support_overhang_angle != "" && this.slicing.support_overhang_angle != 0 ){
        this.slicing.support_overhang_angle--;
      }else{
        this.presentToast(msg)
      }
    }

    // ----support_density---------
    if(value == "support_density"){
      if( this.slicing.support_density != "" && this.slicing.support_density != 0 ){
        this.slicing.support_density--;
      }else{
        this.presentToast(msg)
      }
    }

    // --------support_horizontal_expansion---
    if(value == "support_horizontal_expansion"){
      if( this.slicing.support_horizontal_expansion != "" && this.slicing.support_horizontal_expansion != 0 ){
        this.slicing.support_horizontal_expansion--;
      }else{
        this.presentToast(msg)
      }
    }

    // ---------support_infill_layer_thickness----
    if(value == "support_infill_layer_thickness"){
      if( this.slicing.support_infill_layer_thickness != "" && this.slicing.support_infill_layer_thickness != 0 ){
        this.slicing.support_infill_layer_thickness--;
      }else{
        this.presentToast(msg)
      }
    }

    // -----gradual_support_infill_steps--------
    if(value == "gradual_support_infill_steps"){
      if( this.slicing.gradual_support_infill_steps != "" && this.slicing.gradual_support_infill_steps != 0 ){
        this.slicing.gradual_support_infill_steps--;
      }else{
        this.presentToast(msg)
      }
    }


  }
  // ======slicingDecreeFuction======


  back(){
    this.navCtrl.setRoot(collectionPage)
  }
  save(){
    if(this.print.material_id == "0"){
      this.presentToast("Please Select Material Id");
      return false;
    }
    let data = {
        "country":this.userInfo.country,
        "user_id":this.userInfo.user_id,
        "language_id":this.userInfo.language_id,
        "file_id":this.id,
        "title":this.mainData.item_name,
        "discription":this.mainData.description,
        "material_id":this.print.material_id,
        "layer_thickness":this.print.layer_thickness,
        "exposure_time":this.print.exposure_time,
        "off_time":this.print.off_time,
        "bottom_exposure_time":this.print.bottom_exposure_time,
        "bottom_layers":this.print.bottom_layers,
        "post_cure_time":this.print.post_cure_time,
        "lift_and_sequence_time":this.print.lift_and_sequence_time,
        "z_lift_distance":this.print.z_lift_distance,
        "build_direction":this.print.build_direction,
        "z_lift_speed":this.print.z_lift_speed,
        "z_bottom_speed":this.print.z_bottom_speed,
        "z_bottom_retract_speed":this.print.z_bottom_retract_speed,
        "slide_tilt":this.print.slide_tilt,
        "reflect_x":this.print.reflect_x,
        "reflect_y":this.print.reflect_y,
        "enable_slicing_outline":this.slicing.enable_slicing_outline,
        "infill_density":this.slicing.infill_density,
        "infill_line_distance":this.slicing.infill_line_distance,
        "infill_overlap_percentage":this.slicing.infill_overlap_percentage,
        "infill_layer_thickness":this.slicing.infill_layer_thickness,
        "infill_pattern":this.slicing.infill_pattern,
        "generate_support":this.slicing.generate_support,
        "support_placement":this.slicing.support_placement,
        "support_overhang_angle":this.slicing.support_overhang_angle,
        "support_pattern":this.slicing.support_pattern,
        "support_density":this.slicing.support_density,
        "support_horizontal_expansion":this.slicing.support_horizontal_expansion,
        "support_infill_layer_thickness":this.slicing.support_infill_layer_thickness,
        "gradual_support_infill_steps":this.slicing.gradual_support_infill_steps
        
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.SubmitEditFileInMyCollection(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        console.log(res);
        this.presentToast(res.message);
        this.navCtrl.setRoot(collectionPage)
      }else{

      }
    },err=>{
      console.log(err);
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
