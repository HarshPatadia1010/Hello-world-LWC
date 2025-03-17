/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-04-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement,api } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal=false;
    msg;
    clickHandler(){
        this.showModal=true;
    }
    closeHandler(event){
        this.showModal=false;
        this.msg=event.detail.msg;
        console.log(event.detail.msg);
        
    }
}