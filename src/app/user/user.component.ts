import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent, CommentsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'Carlos Gomes';
  isLoggedIn = false; // this can be used as a state in the template file, so it renders different content based on the value
  favGame = '';

  getFavoriteGame(game: string) {
    this.favGame = game;
  }

  greetUser() {
    alert('Hello, ' + this.username);
  }
}
