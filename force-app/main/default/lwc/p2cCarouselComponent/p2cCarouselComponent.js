/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-04-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement,api } from 'lwc';

export default class P2cCarouselComponent extends LightningElement {
   @api carouselDetail;
   connectedCallback(){
      console.log("data is comming"

      );
      
   }
}