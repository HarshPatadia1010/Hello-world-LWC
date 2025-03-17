/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-04-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement, track,api} from 'lwc';

export default class P2cParentComponent extends LightningElement {
 @track carouselData=[
    {src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header :"First Card",
        description : "First card description.",
        alternativeText : "First card accessible description.",
        href : "https://www.example.com"
    },
    {
      src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header :"Second Card",
        description : "Second card description.",
        alternativeText : "Second card accessible description.",
        href : "https://www.example.com"
    },
    {
      src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header :"Third Card",
        description : "tird card description.",
        alternativeText : "Third card accessible description.",
        href : "https://www.example.com"
    }
    
  ]
 
  percentage=10;
  changeHandler(event){
       this.percentage=event.target.value;
  }
  handleReset(){
    this.template.querySelector("c-p2c-slider").resetSlider();
  }
}