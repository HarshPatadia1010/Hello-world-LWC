/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-23-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    uppercaseItemName='';
    @api
    get itemName(){
        return this.uppercaseItemName;
    }
    set itemName(value){
        this.uppercaseItemName=value.toUpperCase();
        
    }
}