/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-10-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';
import MOMENT from "@salesforce/resourceUrl/moment"     //external file save in static resources and using in LWC
import ANIMATE from "@salesforce/resourceUrl/animate"  //external file save in static resources and using in LWC
import {loadScript} from "lightning/platformResourceLoader"  //the loadScript method  which uses the external file from resources of JS file only
import {loadStyle} from "lightning/platformResourceLoader"  //the loadtStyle method  which uses the external file from resources of CSS file only 
export default class ThirdPartyFile extends LightningElement {
    currentDate;
    isLoaded=false;
   renderedCallback(){
    if(this.isLoaded){ 
        return
    }else{
      Promise.all([
        loadStyle(this,ANIMATE+'/animate/animate.min.css'),
        loadScript(this, MOMENT+'/moment/moment.min.js')
      ]).then(()=>{
           this.setDataOnScreen()
           

      }).catch(error=>{
        console.log(error);
        
      })
      this.isLoaded=true;
    }
 }
 setDataOnScreen(){
    this.currentDate = moment().format('LLLL');
   }
}