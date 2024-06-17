import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h2>Favorite games of {{ username }}</h2>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.title)">{{ game.title }} ({{ game.platform }})</li>
      }
    </ul>
  `,
  styles: `
    h2 {
      text-align: center;
    }

    ul {
      list-style-type: none;
      padding: 0;
      text-align: center;
    }

    li {
      cursor: pointer;
    }
  `,
})
export class GamesComponent {
  @Input() username = ''; // This is how you define an input property to receive data from a parent component
  @Output() addFavoriteEvent = new EventEmitter<string>(); // This is how you define an output property to send data to a parent component

  fav(game: string) {
    this.addFavoriteEvent.emit(game);
  }

  games = [
    {
      id: 1,
      title: 'Super Mario Bros.',
      platform: 'NES',
    },
    {
      id: 2,
      title: 'The Legend of Zelda',
      platform: 'NES',
    },
    {
      id: 3,
      title: 'Crash Bandicoot',
      platform: 'PS1',
    },
  ];
}
