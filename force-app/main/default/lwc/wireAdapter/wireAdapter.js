/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-21-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement,wire,api } from 'lwc';
import{getRecord,getFieldValue} from 'lightning/uiRecordApi'

import NAME_FIELD from  '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
export default class WireAdapter extends LightningElement {
    
//     @api recordId;
//   @wire(getRecord,{recordId:'$recordId',fields:[NAME_FIELD,PHONE_FIELD]})
//   record;  //data snd error   
  
//   get name(){
//     return this.record.data ? getFieldValue(this.record.data,NAME_FIELD):'';
//   }
//   get phone(){
//     return this.record.data ? getFieldValue(this.record.data,PHONE_FIELD):'';
//   }


//without importing we ca directly use Account.Name

// @api recordId;
// @wire(getRecord, { recordId: '$recordId', fields: ['Account.Name', 'Account.Phone'] })
// record;

// get name() {
//     return this.record?.data ? this.record.data.fields.Name.value : '';
// }

// get phone() {
//     return this.record?.data ? this.record.data.fields.Phone.value : '';
// }



}