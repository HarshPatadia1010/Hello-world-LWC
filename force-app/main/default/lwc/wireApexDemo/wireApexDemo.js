/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-21-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/Controller.getContacts';
import { getRecord } from 'lightning/uiRecordApi';
i
export default class WireApexDemo extends LightningElement {
    @api recordId;

    // @wire(getRecord,{record: '$recordId', fields:'Account.Name'})
    // record;
    
    @wire(getContacts,{accId:'$recordId'})
    contacts;
    
    // get name(){
    //     return this.record.data.fields.Name.value;
    // }
}