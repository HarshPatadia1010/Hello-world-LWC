/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-27-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement,api } from 'lwc';

export default class P2cAlertComponent extends LightningElement {
    @api message; 
    @api heading;
    @api number;
    @api isVisible;
}