import { Subject } from 'rxjs';
import { Episode } from '../models/episode';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class EpisodeService{

    constructor(private httpClient : HttpClient){}

    public episodes = [
    ]

    episodesSubject = new Subject<any>();

    emitEpisodesSubject (){
        this.episodesSubject.next(this.episodes.slice());
    }

    saveEpisodesToserver(){
        this.httpClient
        .put('https://kaamelott-7aaa9.firebaseio.com/episodes.json', this.episodes)
        .subscribe(
            ()=>{
                console.log('Enregistrement terminé');
            },
            (error) => {
                console.log('Erreur de sauvegarde' + error);
            }
        )
    }

    getEpisodesToServer(){
        this.httpClient
            .get<any[]>('https://kaamelott-7aaa9.firebaseio.com/episodes.json')
            .subscribe(
                (response) =>{
                    this.episodes = response;
                    this.emitEpisodesSubject();
                },
                (error) => {
                    console.log('Erreur de chargement' + error);
                }
            )
    }

}