import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product:any; 
  @Output() newItemEvent = new EventEmitter<string>();

  clickOnCard(id:any){
    this.newItemEvent.emit(id);
  }
}
