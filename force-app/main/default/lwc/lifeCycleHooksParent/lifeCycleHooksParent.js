/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-26-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';

export default class LifeCycleHooksParent extends LightningElement {
    constructor(){
        super()
        console.log('parent constructor call');   
    }
    connectedCallback(){
        console.log('parent connectedCallback call');   
    }
    renderedCallback(){
        console.log('parent renderedCallback call');   

    }
    // name
    // changeHandler(event){
    //     this.name=event.target.value

    // }
    //unmounted phase 
    isChildVisible=false;
    handleClick(event){
        this.isChildVisible=!this.isChildVisible;

    }
    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack);
    }
}