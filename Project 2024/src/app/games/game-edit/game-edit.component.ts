import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent {
  isLoading: boolean = true;
  gameId!: any;
  game: any = {
    name: ['',[Validators.required,Validators.minLength(3)]],
    imgUrl: ['',[Validators.required]],
    description: ['',[Validators.required,Validators.minLength(5)]],
    year: ['',[Validators.required],Validators.minLength(4)],
    genre: ['',[Validators.required,Validators.minLength(3)]],
  }

  constructor(
    private router: ActivatedRoute,
    private gameService: GameService,
    private routers: Router,
    ) { }


    ngOnInit() {
      this.gameId = this.router.snapshot.params['gameId'];
      this.gameService.getGame(this.gameId).subscribe((game => {
        this.game = game
      }));
    }

    updateGameSubmitHandler ():void {

      const {name,imgUrl,description,year,genre} = this.game
     const gameId = this.router.snapshot.params['gameId'];
    this.gameService.editGame(gameId,name,imgUrl,description,year,genre).subscribe(() => {
      alert('Game saved')
      this.routers.navigate(['/catalog']);
    });
  }

    }

    
  
