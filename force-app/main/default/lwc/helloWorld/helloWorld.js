/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-21-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
   
    
   name="Username";
    @track address={
        city:"Anand",
        postCode:3008
    }
    // greeting = 'World';
    changeHandler(event) {
    this.name = event.target.value;
                          }
changeCity(event){
this.address.city = event.target.value;   
}
  
}