/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-11-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToHome extends NavigationMixin(LightningElement) {
    navigateToHome() {
        this[NavigationMixin.Navigate]({
            type: "standard__namedPage",
            attributes: {
                pageName: "home"
            }
        });
    }
    navigateToChatter() {
        this[NavigationMixin.Navigate]({
            type: "standard__namedPage",
            attributes: {
                pageName: "chatter"
            }
        });
    } 
}
