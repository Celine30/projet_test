import { Component, OnInit } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  last_name: string;
  position: number;
  first_name: string;
  nick_name: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, last_name: 'Gourmaud', first_name: "Jamy", nick_name: "Jamy "},
  {position: 2, last_name: 'Courant', first_name: "Frédéric", nick_name: "Fred"},
  {position: 3, last_name: 'Quindou', first_name: "Sabine ", nick_name: "Sabine"},
  {position: 4, last_name: 'Guerlain', first_name: "Valérie ", nick_name: "La voix"},
  {position: 5, last_name: 'Kenworth', first_name: " W900", nick_name: "Le camion"},
];


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

}
