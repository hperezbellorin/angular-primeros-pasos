import { outputAst } from '@angular/compiler';
import { Character } from './../../interfaces/character.interface';
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
@Input()
  public CharacterList: Character[] = [{
     name: 'Trunk',
     power: 10,
  }
];

//
@Output()
public onDelete: EventEmitter<string> = new EventEmitter();

onDeleteCharacter(id?:string): void {

  if(!id) return;
this.onDelete.emit(id);
console.log(id);
}

}
