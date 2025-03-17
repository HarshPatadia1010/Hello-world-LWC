/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-05-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement,api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetails;
   @api 
   get details(){
       return this.userDetails;
   }
   set details(data){
      let newAge=data.age*2;  // the data is a deep copy that is comming
          this.userDetails={...data,age:newAge,location:"anand"}   //creating a shallow copy by spread operator and the using the overriding feture updating the age 


   }
}