import { Component } from '@angular/core';
import { Game } from '../types/game';
import { GameService } from '../services/game.service';
import { NgForm } from '@angular/forms';
import { User } from '../types/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  game: Game[] = [];
  searchGame: Game[] = [];
  isLoading: boolean = true;
  errMessage!: string;
  

  constructor(
    private gameService: GameService
){}
    

    ngOnInit() {
      this.gameService.getGames().subscribe({
        next: (games) => {
          this.game = games;
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(`Error: ${err}`);
        },
      })
    }

    searchGames(form: NgForm): void {
      const { search } = form.value;
      this.searchGame = this.game
        .filter(game => game.name
          .toLowerCase()
          .includes(search.toLowerCase()))
    }
  
}




