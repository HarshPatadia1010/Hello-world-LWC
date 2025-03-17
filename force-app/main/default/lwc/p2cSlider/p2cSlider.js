/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-04-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement,api} from 'lwc';

export default class P2cSlider extends LightningElement {
    val=30;
    valChange(event){
      this.val=event.target.value;
    }

    @api resetSlider(evevt){
        this.val=0;
      }
}