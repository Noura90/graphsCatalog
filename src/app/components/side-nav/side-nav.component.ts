import { Component, OnInit } from '@angular/core';


class MenuItem {

  constructor(public title: string, public type: string){}
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  menu: MenuItem [] = [
    new MenuItem('Liste des graphes', 'single'),
    new MenuItem('Composition de graphes', 'multiple')
  ];

  menuItemsElements: HTMLElement[];


  constructor() { }

  ngOnInit() {
  }


  onSelectSingle(singleLink: HTMLElement, multipleLink: HTMLElement){
    singleLink.classList.add('selected');
    if (multipleLink.classList.contains('selected')){
      multipleLink.classList.remove('selected');
    }
  }

  onSelectMultiple(singleLink: HTMLElement, multipleLink:HTMLAudioElement){
    multipleLink.classList.add('selected');
    if (singleLink.classList.contains('selected')){
      singleLink.classList.remove('selected');
    }
  }


  onBurgerClick(){
    
  }



}
