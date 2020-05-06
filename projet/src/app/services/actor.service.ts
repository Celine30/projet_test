import { Subject } from 'rxjs';
import { Actor } from '../models/actor';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ActorService{

    constructor(private httpClient : HttpClient){}

    public actors = [
    ]

    userSubject = new Subject<any>();

    emitUserSubject (){
        this.userSubject.next(this.actors.slice());
    }

    saveActorsToserver(){
        this.httpClient
        .put('https://kaamelott-7aaa9.firebaseio.com/actor.json', this.actors)
        .subscribe(
            ()=>{
                console.log('Enregistrement terminé');
            },
            (error) => {
                console.log('Erreur de sauvegarde' + error);
            }
        )
    }

    getActorsToServer(){
        this.httpClient
            .get<any[]>('https://kaamelott-7aaa9.firebaseio.com/actor.json')
            .subscribe(
                (response) =>{
                    this.actors = response;
                    this.emitUserSubject();
                },
                (error) => {
                    console.log('Erreur de chargement' + error);
                }
            )
    }

}