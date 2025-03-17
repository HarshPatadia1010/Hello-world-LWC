/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-26-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';

export default class LifeCycleHooksChild extends LightningElement {
    constructor(){
        super()
        console.log('child constructor call');   
    }
    connectedCallback(){
        console.log('child connectedCallback call');   
    }
    renderedCallback(){
        console.log('child renderedCallback call');   
        throw new Error('loading of child component failed');

    }
    disconnectedCallback(){
        alert("child is disconnected called")
    }
}