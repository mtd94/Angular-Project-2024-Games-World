import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user/user.service';
import { Game } from '../../types/game';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  game: Game| undefined;
  
  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    
  ) {}
  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get isOwner (): boolean {
    return this.userService.user?._id === this.game?.userId
  }

  ngOnInit(): void {
    this.fetchGame();
  }

  fetchGame(): void {
    const id = this.activatedRoute.snapshot.params['gameId'];

    this.gameService.getGame(id).subscribe((game) => {
      this.game = game;
  });
}

deleteGame(): void {
  const gameId = this.activatedRoute.snapshot.params['gameId'];
  const message = 'Are you sure you want to delete this game';

  if (confirm(message)) {
    this.gameService.deleteGame(gameId).subscribe({
      next: () => {
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        console.error(`Error: ${err}`);
      },
    });
  }
  
  }
  
}