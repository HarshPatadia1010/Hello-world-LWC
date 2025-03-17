/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-26-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';

export default class HelloQuerrySelectordom extends LightningElement {
    NameList=['harsh','raj','hp','jay'];
    featchDetailHandler(event){
       const e=this.template.querySelector('h1');
       e.style.border="2px solid red"
       console.log(e.innerText);

       //quarySelector all
      const list= this.template.querySelectorAll('.list');
             Array.from(list).forEach(currentItem => {
                console.log(currentItem.innerText);
            currentItem.setAttribute('title',currentItem.innerText);
             });

             //lwc:dom="manual" demo
         const childEle =this.template.querySelector('.child');
         childEle.innerHTML='<p>hi I am a child element</p>'    
       
    }
}