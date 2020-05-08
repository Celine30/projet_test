import { Component, OnInit } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';


import{ EpisodeService} from '../services/episode.service'
import { Subscription } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  title: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})

export class EpisodeComponent implements OnInit {

  episodeSubscription : Subscription;

  constructor(private episodeservice: EpisodeService) { }

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

  onsaveEpisode(){
    this.episodeservice.saveEpisodesToserver()
  }

  onfetchEpisode(){
    this.episodeservice.getEpisodesToServer()
  }


  ngOnInit(): void {
    this.episodeSubscription = this.episodeservice.episodesSubject.subscribe(
      (response) => {
        this.dataSource.data = response;
      }
    );
    this.episodeservice.emitEpisodesSubject()
  }

}
