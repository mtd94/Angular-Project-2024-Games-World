import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent {
  constructor(private gameService: GameService,
    private router: Router,
    private fb: FormBuilder){}

    form = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      imgUrl: ['',[Validators.required]],
      description: ['',[Validators.required,Validators.minLength(5)]],
      year: ['',[Validators.required]],
      genre: ['',[Validators.required,Validators.minLength(3)]],
    })


newGameSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return alert('Please fill all fields!')
    }

    const {name,imgUrl,description,year,genre} = form.value;
    
    this.gameService.createGame(name,imgUrl,description,year,genre).subscribe(() => {
      this.router.navigate(['/catalog']);
    });
  }
  

}

