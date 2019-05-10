import { Injectable } from '@angular/core';
import {  Headers, Response,RequestOptions,RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpHelper } from '../helper/http.helper';
import { Http } from '@angular/http';
// import { Header } from 'ionic-angular/components/toolbar/toolbar-header';

//const Base_url='https://admin.3dhom.com/index.php/api';
const Base_url="http://isysnexttechnofuture.in/printer_software/index.php/api";

@Injectable()
export class UserService
{
  constructor(public http: Http, public HttpHelper:HttpHelper)
  {

  }
    goLoginAPI(data){
        let request=data;
        console.log(request);
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        var Formdata = new FormData();
        Formdata.append("username", data.username);
        Formdata.append("password", data.password);
        // let reqOption: RequestOptions = new RequestOptions({  headers: headers });
        return this.http.post(Base_url + '/login/check',Formdata,{  headers: headers }).map((response: Response) => {
            let res = response.json();
            return res;
        });

        // var headers = new Headers()
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // let options = new RequestOptions({ headers: headers });
        //  let postData = new FormData();
        //  postData.append('username' , data.username );
        //  postData.append('password' , data.password );
        //  return this.http.post(Base_url+'/login/check',postData)
        //    .map((response: Response) => {
        //        let res = response.json();
        //        return res;
        //    });

        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // let reqOption: RequestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headers });
        // return this.http.post(Base_url+'/login/check',request,reqOption)
        // .map((response: Response) => {
        //     let res = response.json();
        //     return res;
        // });
    }
    
    Forget(data){
        let request=data;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let reqOption: RequestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headers });
        return this.http.post(Base_url+'/forgetPassword',request,reqOption)
        .map((response: Response) => {
            let res = response.json();
            return res;
        });
    }

    dashboard(data){
        let request=data;
        console.log(request);
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        var Formdata = new FormData();
        Formdata.append("country", data.country);
        Formdata.append("user_id", data.user_id);
        // let reqOption: RequestOptions = new RequestOptions({  headers: headers });
        return this.http.post(Base_url + '/dashboard/',Formdata,{  headers: headers }).map((response: Response) => {
            let res = response.json();
            return res;
        });
    }

    CityList(req){
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        let postData = new FormData();
        //postData.append('country_id' , req.country_id );
        postData.append('state_id' , req.state_id );
        return this.http.post(Base_url+'/dashboard/city',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    stateList(req){
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        let postData = new FormData();
        postData.append('country_id' , req.country_id );
        return this.http.post(Base_url+'/dashboard/state',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    CountryList(){
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        return this.http.post(Base_url + '/dashboard/country',{  headers: headers }).map((response: Response) => {
            let res = response.json();
            return res;
        });
    }

    AddUserDetails(userInfo){
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
         let postData = new FormData();
         postData.append('user_id' , userInfo.user_id );
         postData.append('name' , userInfo.name );
         postData.append('lname' , userInfo.lname );
         postData.append('address' , userInfo.address );
         postData.append('zipcode' , userInfo.zipcode );
         postData.append('mobile' , userInfo.mobile );
         postData.append('country' , userInfo.country );
         postData.append('state' , userInfo.state );
         postData.append('city' , userInfo.city );
         postData.append('region' , userInfo.region );
        return this.http.post(Base_url+'/dashboard/add_user_detail',postData)
            .map((response: Response) => {
                let res = response.json();
                return res;
        });
    }

    AddUserShippingDetails(userInfo){
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
         let postData = new FormData();
         postData.append('user_id' , userInfo.user_id );
         postData.append('country' , userInfo.country );
         postData.append('sh_address' , userInfo.sh_address );
         postData.append('sh_zipcode' , userInfo.sh_zipcode );
         postData.append('shp_country1' , userInfo.shp_country1 );
         postData.append('shp_city1' , userInfo.shp_city1 );
         postData.append('sh_region' , userInfo.sh_region );
        return this.http.post(Base_url+'/dashboard/add_ship_detail',postData)
            .map((response: Response) => {
                let res = response.json();
                return res;
        });
    }

    cart(data){
        let request=data;
        console.log(request);
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        var Formdata = new FormData();
        Formdata.append("country", data.country);
        Formdata.append("user_id", data.user_id);
        // let reqOption: RequestOptions = new RequestOptions({  headers: headers });
        return this.http.post(Base_url + '/dashboard/cart',Formdata,{  headers: headers }).map((response: Response) => {
            let res = response.json();
            return res;
        });
    }

    CategoryList(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
        let postData = new FormData();
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        
        console.log("https://admin.3dhom.com/index.php/api/dashboard/category_list");
        return this.http.post(Base_url+'/dashboard/category_list',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }
    
    CategoryListSearch(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('sort' , userInfo.sort );
        postData.append('category' , userInfo.category );
        postData.append('fill_search' , userInfo.fill_search );
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        return this.http.post(Base_url+'/dashboard/search_result',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    CategoryDetails(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('cat_id' , userInfo.cat_id );
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        return this.http.post(Base_url+'/dashboard/category_details',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    SubCategoryDetails(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('cat_id' , userInfo.cat_id );
        postData.append('sub_cat_id' , userInfo.sub_cat_id );
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        return this.http.post(Base_url+'/dashboard/sub_category_detail',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    FileDetails(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
       postData.append('file_id' , userInfo.file_id );
       postData.append('cat_id' , userInfo.cat_id );
        postData.append('sub_cat_id' , userInfo.sub_cat_id );
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        return this.http.post(Base_url+'/dashboard/file_detail',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    materialList(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        return this.http.post(Base_url+'/dashboard/material_list',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    ForPrint(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('file_id' , userInfo.file_id );
        postData.append('material' , userInfo.material );
        //postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        return this.http.post(Base_url+'/dashboard/add_print_file',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    checkStatusForPrint(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('file_id' , userInfo.file_id );
        return this.http.post(Base_url+'/dashboard/check_status_print_file',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    AddToCart(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('file_id' , userInfo.file_id );
        postData.append('unique_id' , userInfo.unique_id );
        postData.append('name' , userInfo.name );
        postData.append('sub_cat_id' , userInfo.sub_cat_id );
        postData.append('cat_id' , userInfo.cat_id );
        postData.append('price' , userInfo.price );
        postData.append('qty' , userInfo.qty );
        //postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        return this.http.post(Base_url+'/dashboard/add_cart',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    DeleteFormCart(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('cart_id' , userInfo.cart_id );
        postData.append('user_id' , userInfo.user_id );
        return this.http.post(Base_url+'/dashboard/delete_item_cart',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    MyCollection(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        return this.http.post(Base_url+'/dashboard/my_collection',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    AddFileInMyCollection(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        postData.append('file' , userInfo.file );

        return this.http.post(Base_url+'/dashboard/Add_file',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    EditFileInMyCollection(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        postData.append('file_id' , userInfo.file_id );
        postData.append('language_id' , userInfo.language_id );

        return this.http.post(Base_url+'/dashboard/edit_file',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }
    
    SubmitEditFileInMyCollection(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
       
       let postData = new FormData();
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        postData.append('file_id' , userInfo.file_id );
        postData.append('language_id' , userInfo.language_id );
        postData.append('material_id' , userInfo.material_id );
        postData.append('layer_thickness' , userInfo.layer_thickness );
        postData.append('exposure_time' , userInfo.exposure_time );
        postData.append('off_time' , userInfo.off_time );
        postData.append('bottom_exposure_time' , userInfo.bottom_exposure_time );
        postData.append('bottom_layers' , userInfo.bottom_layers );
        postData.append('post_cure_time' , userInfo.post_cure_time );
        postData.append('lift_and_sequence_time' , userInfo.lift_and_sequence_time );
        postData.append('z_lift_distance' , userInfo.z_lift_distance );
        postData.append('build_direction' , userInfo.build_direction );
        postData.append('z_lift_speed' , userInfo.z_lift_speed );
        postData.append('z_bottom_speed' , userInfo.z_bottom_speed );
        postData.append('z_bottom_retract_speed' , userInfo.z_bottom_retract_speed );
        postData.append('slide_tilt' , userInfo.slide_tilt );
        postData.append('reflect_x' , userInfo.reflect_x );
        postData.append('reflect_y' , userInfo.reflect_y );
        postData.append('enable_slicing_outline' , userInfo.enable_slicing_outline );
        postData.append('infill_density' , userInfo.infill_density );
        postData.append('infill_line_distance' , userInfo.infill_line_distance );
        postData.append('infill_overlap_percentage' , userInfo.infill_overlap_percentage );
        postData.append('infill_layer_thickness' , userInfo.infill_layer_thickness );
        postData.append('infill_pattern' , userInfo.infill_pattern );
        postData.append('generate_support' , userInfo.generate_support );
        postData.append('support_placement' , userInfo.support_placement );
        postData.append('support_overhang_angle' , userInfo.support_overhang_angle );
        postData.append('support_pattern' , userInfo.support_pattern );
        postData.append('support_density' , userInfo.support_density );
        postData.append('support_horizontal_expansion' , userInfo.support_horizontal_expansion );
        postData.append('support_infill_layer_thickness' , userInfo.support_infill_layer_thickness );
        postData.append('gradual_support_infill_steps' , userInfo.gradual_support_infill_steps );
        postData.append('title' , userInfo.title );
        postData.append('discription' , userInfo.discription );
        // return this.http.post(Base_url + '/dashboard/Add_prints',postData,{  headers: headers }).map((response: Response) => {
        //     let res = response.json();
        //     return res;
        // });
        return this.http.post(Base_url+'/dashboard/Add_prints',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    DeleteFormMyCollection(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        postData.append('file_id' , userInfo.file_id );

        return this.http.post(Base_url+'/dashboard/delete_collection_file',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    myOrder(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('country' , userInfo.country );
        postData.append('user_id' , userInfo.user_id );
        return this.http.post(Base_url+'/dashboard/my_order',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    ProductReturnDetail(userInfo){
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
         let postData = new FormData();
         postData.append('item_id' , userInfo.item_id );
         postData.append('country' , userInfo.country );
         postData.append('user_id' , userInfo.user_id );
         postData.append('language_id' , userInfo.language_id );
        return this.http.post(Base_url+'/dashboard/product_return',postData)
            .map((response: Response) => {
                let res = response.json();
                return res;
        });
    }
    
    ProductReturnSend(userInfo){
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
         let postData = new FormData();
         postData.append('id' , userInfo.id );
         postData.append('ship_id' , userInfo.ship_id );
         postData.append('user_id' , userInfo.user_id );
         postData.append('message' , userInfo.message );
        return this.http.post(Base_url+'/dashboard/product_return',postData)
            .map((response: Response) => {
                let res = response.json();
                return res;
        });
    }

    PersonalService(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('user_id' , userInfo.user_id );
        return this.http.post(Base_url+'/dashboard/service_request_list',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    AddPersonalService(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('title' , userInfo.title );
        postData.append('message' , userInfo.message );
        postData.append('user_id' , userInfo.user_id );
        postData.append('file' , userInfo.file );

        return this.http.post(Base_url+'/dashboard/add_personalized_request',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }

    SupportService(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('user_id' , userInfo.user_id );
        postData.append('language_id' , userInfo.language_id );
        postData.append('country' , userInfo.country );

        return this.http.post(Base_url+'/dashboard/support_request_list',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }
    
    AddSupportRequest(userInfo){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
    
       let postData = new FormData();
        postData.append('title' , userInfo.title );
        postData.append('message' , userInfo.message );
        postData.append('user_id' , userInfo.user_id );
        postData.append('file' , userInfo.file );

        return this.http.post(Base_url+'/dashboard/add_request',postData)
          .map((response: Response) => {
              let res = response.json();
              return res;
          });
    }
    
    languageList(){
        var headers = new Headers()
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       let options = new RequestOptions({ headers: headers });
        
        return this.http.post(Base_url + '/dashboard/get_language',{  headers: headers }).map((response: Response) => {
            let res = response.json();
            return res;
        });
    }

    AddLanguage(userInfo){
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
         let postData = new FormData();
         postData.append('printer_id' , userInfo.printer_id );
         postData.append('language_id' , userInfo.language_id );
        return this.http.post(Base_url+'/dashboard/set_language',postData)
            .map((response: Response) => {
                let res = response.json();
                return res;
        });
    }

    InfoDetails(userInfo){
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
         let postData = new FormData();
         postData.append('user_id' , userInfo.user_id );
         postData.append('country' , userInfo.country );
        return this.http.post(Base_url+'/dashboard/information',postData)
            .map((response: Response) => {
                let res = response.json();
                return res;
        });
    }

    UpdateEmailDetails(userInfo){
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
         let postData = new FormData();
         postData.append('user_id' , userInfo.user_id );
         postData.append('country' , userInfo.country );
         postData.append('extra_email' , userInfo.extra_email );
        return this.http.post(Base_url+'/dashboard/add_extra_mail',postData)
            .map((response: Response) => {
                let res = response.json();
                return res;
        });
    }

    subscriptionDetail(userInfo){
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
         let postData = new FormData();
         postData.append('user_id' , userInfo.user_id );
         postData.append('country' , userInfo.country );
        return this.http.post(Base_url+'/dashboard/subscription_detail',postData)
            .map((response: Response) => {
                let res = response.json();
                return res;
        });
    }

    getAdvanceSettingDetail(userInfo){
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
         let postData = new FormData();
         postData.append('user_id' , userInfo.user_id );
         postData.append('country' , userInfo.country );
        return this.http.post(Base_url+'/dashboard/advance_setting',postData)
            .map((response: Response) => {
                let res = response.json();
                return res;
        });
    }

    addAdvanceSettingDetail(userInfo){
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
         let postData = new FormData();
         postData.append('printer_id' , userInfo.printer_id );
         postData.append('standby' , userInfo.standby );
         postData.append('z_position' , userInfo.z_position );
         postData.append('tilt_motor' , userInfo.tilt_motor );
         postData.append('z_motor' , userInfo.z_motor );
         postData.append('lamp_status' , userInfo.lamp_status );
         postData.append('fan' , userInfo.fan );
         postData.append('machine_status' , userInfo.machine_status );
        return this.http.post(Base_url+'/dashboard/add_advnace_setting',postData)
            .map((response: Response) => {
                let res = response.json();
                return res;
        });
    }




}
