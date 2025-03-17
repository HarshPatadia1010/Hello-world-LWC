/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-20-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement } from 'lwc';

export default class QuizeApp extends LightningElement {
    questionList=[
        {
            id:"Question1",
            question:"which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"which one of the following is valid LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"which one of the following is not deractive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }


    ]

    selected={}  //for storing option selected

    changHandler(event){
        console.log("name",event.target.name);
        console.log("value",event.target.value) ;
        const {name ,value}=event.target     ////destructuring and assigning value to the vaiables

        this.selected={...this.selected,[name]:value}
        //this.selected={"question1":"a"}
    }
}