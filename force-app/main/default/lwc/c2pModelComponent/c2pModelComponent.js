/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-04-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    
    okHandler(){
       const custevent= new CustomEvent('close',{
        bubbles:true,
        detail:{
           msg: "modal close successfully"
        }
       });
       this.dispatchEvent(custevent);
    }
    footerHandler(){
        console.log("bubble to footer parent !!!");
        
    }
}