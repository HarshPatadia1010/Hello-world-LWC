/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-26-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html'
import signUpTemplate from './signUpTemplate.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    selectedBtn='';
 render(){
    return this.selectedBtn=='SignUp'? signUpTemplate : 
     this.selectedBtn=='SignIn'? signInTemplate :
     renderTemplate
 }  
 handleClick(event){
 this.selectedBtn=event.target.title;
//   console.log(this.selectedBtn); 
 } 
 submitHandler(){
    console.log("sign In is Successfull !!!");
    
 }

}