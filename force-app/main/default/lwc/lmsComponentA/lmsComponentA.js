/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-06-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement, wire } from 'lwc';
import { publish,MessageContext } from 'lightning/messageService';
import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChannel/SampleMessageChannel__c';
export default class LmsComponentA extends LightningElement {
@wire(MessageContext)
messageContext;
 handleButtonClick(event){
   const msgInput =this.template.querySelector('lightning-input').value;
   const payload={message:msgInput};
   publish(this.messageContext,SAMPLE_MESSAGE_CHANNEL,payload);
}
}