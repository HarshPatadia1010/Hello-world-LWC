/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-23-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';

export default class ClickAndChange extends LightningElement {
    greeting='df';
    fname;
    lname;
    handleClick(event){
          this.greeting=this.template.querySelector('lightning-input').value;
      }
    handlevent(event){
       let input= this.template.querySelectorAll("lightning-input");
       input.forEach(function(e){
        if(e.name=='fname'){
            this.fname=e.value;
        }
        else if(e.name=='lname'){
            this.lname=e.value;
        }
        else{
            return;
        }
       },this);
    }  


}