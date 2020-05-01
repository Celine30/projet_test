import { Component, OnInit } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  title: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Quels Chantiers', title: "La tour Eiffel"},
  {position: 2, name: 'Quels Chantiers', title: "La Grande Arche de la Défence"},
  {position: 3, name: 'Quels Chantiers', title: "Le viaduc de Millau"},
  {position: 4, name: 'Quels Chantiers', title: "Le tunnel sous la manche"},
  {position: 5, name: 'La Conquete du ciel', title: "Le Vol à voile"},
  {position: 6, name: 'La Conquete du ciel', title: "Le dirigeables"},
  {position: 7, name: 'La Conquete du ciel', title: "Les avions de chasse"},
  {position: 8, name: 'La Conquete du ciel', title: "Les hélicoptères"},

];

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})

export class EpisodeComponent implements OnInit {


  displayedColumns: string[] = ['select', 'position', 'name', 'title'];
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
