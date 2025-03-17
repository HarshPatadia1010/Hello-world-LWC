/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-10-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';
import USER_NAME from '@salesforce/resourceUrl/user_image';
import MOON_LIGHT from '@salesforce/resourceUrl/moon_light';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';"
export default class StaticImages extends LightningElement {
    userImage =USER_NAME;
    moonLight= MOON_LIGHT;
}