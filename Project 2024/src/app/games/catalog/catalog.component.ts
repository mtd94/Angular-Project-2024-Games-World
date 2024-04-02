import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Game } from '../../types/game';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  games: Game[] = [];
  isLoading: boolean = true;

  constructor(
    private gameService: GameService,
    private userService: UserService,
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      },
    });
  }
}


