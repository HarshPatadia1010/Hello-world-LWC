/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-06-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement,wire } from 'lwc';
import { subscribe,MessageContext } from 'lightning/messageService';
import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChannel/SampleMessageChannel__c';
export default class LmsComponentB extends LightningElement {
    @wire(MessageContext)
    messageContext;
    receivedMessage="No message received yet";
   subscription=null; //// to stop from multiple times subscribing
   connectedCallback(){
    if(this.subscription==null){
        this.subscription=subscribe(this.messageContext,SAMPLE_MESSAGE_CHANNEL,(payload)=>{this.handleMessage(payload)}); 
    }   
    }
    handleMessage(payload){
        //handle the message payload 
        console.log("Received message:",payload);
        this.receivedMessage=payload.message;
   }
     

}