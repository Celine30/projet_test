import { Component, OnInit } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

import{ ActorService} from '../services/actor.service'
import { Subscription } from 'rxjs';



export interface PeriodicElement {
  last_name: string;
  position: number;
  first_name: string;
  nick_name: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
];


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})


export class ActorComponent implements OnInit {

  actorSubscription : Subscription;

  constructor(private actorservice: ActorService) { }

  displayedColumns: string[] = ['select', 'position', 'last_name', 'first_name', 'nick_name'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);


  /** Compare le nbre total de ligne et le nbre de lignes selectionnees */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Sélectionne toutes les lignes si elles ne sont pas toutes sélectionnées; sinon sélection claire */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** Le Label de la case à cocher sur la ligne passée */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  onsave(){
    this.actorservice.saveActorsToserver()
  }

  onfetch(){
    this.actorservice.getActorsToServer()
  }

  ngOnInit(): void {
    this.actorSubscription = this.actorservice.userSubject.subscribe(
      (response) => {
        this.dataSource.data = response;
      }
    );
    this.actorservice.emitUserSubject()
  }



}
