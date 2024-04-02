import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../types/game';

@Injectable({
    providedIn: 'root',
  })
  export class GameService {
    constructor(private http: HttpClient) {}
    getGames() {
      return this.http.get<Game[]>('http://localhost:3000/api/games');
    }

    getGame(id: string) {
      return this.http.get<Game>(`http://localhost:3000/api/games/${id}`);
    }

    createGame(name:string, imgUrl:string,description:string,year:string,genre:string) {
      return this.http.post<Game>('/api/games',{name,imgUrl,description,year,genre});
    }

    editGame(gameId:number,name:string,imgUrl:string,description:string,year:string,genre:string){
      return this.http.put<Game>(`/api/games/${gameId}`,{name,imgUrl,description,year,genre});
    }

    deleteGame (gameId:number) {
      return this.http.delete<Game>(`/api/games/${gameId}`,{});
      
    }
  }



