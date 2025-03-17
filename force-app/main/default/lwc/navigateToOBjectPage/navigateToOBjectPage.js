/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-11-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';
import {NavigationMixin}from 'lightning/navigation'
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";
export default class NavigateToOBjectPage extends NavigationMixin(LightningElement) {

    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type :"standard__objectPage",
            attributes:{
                objectApiName:"Contact",
                actionName :"new"      //new,list,
            }
        })
    }
    navigateToNewRecordWithDefault(){
       const defaultValues= encodeDefaultFieldValues({
            FirstName:"Harsh",
            LastName:"patadia",
            LeadSource:"Other"
        })
        this[NavigationMixin.Navigate]({
            type :"standard__objectPage",
            attributes:{
                objectApiName:"Contact",
                actionName :"new"      //new,list,
            },
            state:{
                defaultFieldValues:  defaultValues
            }
        })
    }
    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type :"standard__objectPage",
            attributes:{
                objectApiName:"Contact",
                actionName :"list"      //new,list,
            }
        })
    }

    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type :"standard__objectPage",
            attributes:{
                objectApiName:"ContentDocument",
                actionName :"home"      //new,list,
            }
        })
    }
}