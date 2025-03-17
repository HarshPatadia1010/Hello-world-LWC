/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-10-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';
import WEEKLY_REPORT from "@salesforce/contentAssetUrl/WeeklyWorkReport2pdf"
export default class ContentAsset extends LightningElement {
    pdf = WEEKLY_REPORT;
}