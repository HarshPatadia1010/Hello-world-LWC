/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-23-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTow from './templateTwo.html';
export default class MultipleTemplate extends LightningElement {
 templateOne=true;
 render(){
    return this.templateOne ? templateOne : templateTow;
 }   
 switchTemplate(){
    this.templateOne= this.templateOne===true ? false : true;
 }
}