/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-11-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';
import {NavigationMixin}from 'lightning/navigation'
import RecordId from '@salesforce/schema/AppUsageAssignment.RecordId';

export default class NavigateToRecordPage extends NavigationMixin(LightningElement){
 
    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type:"standard__recordPage",
            attributes:{
                recordId:"003Qy00000IUjHwIAL",
                objectApiName:"Contact",
                actionName:"view"   //view,edit
            }
        })
    }

    recordEditMode(){
        this[NavigationMixin.Navigate]({
            type:"standard__recordPage",
            attributes:{
                recordId:"003Qy00000IUjHwIAL",
                objectApiName:"Contact",
                actionName:"edit"   //view,edit
            }
        })
    }
}