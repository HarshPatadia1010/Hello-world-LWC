/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-20-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
  import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
   
//     handleClick(event){
  //     }
          name1;
      message = console.log('Property Initialized');
      isVisible=false
      handleClick(event) {
          // this.isVisible=!this.isVisible;       ////toggle the value from true to false.
          this.isVisible=true;
      }
       Namehandle(event){
        this.name1=event.target.value; 
      }
     get inputName(){
        return this.name1==='harsh' 
    }
    
     

  }
 