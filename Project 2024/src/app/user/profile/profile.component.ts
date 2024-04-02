import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { UserId } from 'src/app/types/user-id';
import { Game } from 'src/app/types/game';
import { GameService } from 'src/app/services/game.service';


interface Profile {
  firstName: string,
  lastName: string,
  username: string;
  email: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User | undefined;
  userId!: string | UserId;
  gameList: Game[] = [];
  ownGameList: Game[] = [];
  
  profileDetails: Profile = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
  };



  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: [
      '',
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
  });

  constructor(private fb: FormBuilder,
     private userService: UserService,
     private gameService: GameService,
    ) {}

  ngOnInit(): void {
    this.userId = this.userService.user?._id as string
    this.userService.user$.subscribe({
      next: (user) => {
        this.user = user;
      },
      error: () => { },

    })

    const { firstName,lastName,username, email} = this.userService.user!;
    this.profileDetails = {
      firstName,
      lastName,
      username,
      email,
    };

    this.form.setValue({
      firstName,
      lastName,
      username,
      email,
    });

    this.gameService.getGames().subscribe({
      next: (games) => {
        this.gameList = games;
        this.ownGameList = this.gameList.filter((game) => game.userId == this.userId)
  }
});
  }
}
  
