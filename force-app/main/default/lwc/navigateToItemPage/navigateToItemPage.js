/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-11-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';
import {NavigationMixin}from 'lightning/navigation'
export default class NavigateToItemPage extends NavigationMixin(LightningElement){

    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type:"standard__navItemPage",
            attributes:{
                apiName:"LWC_Fundamentals"
                
            }
        })
    }
}