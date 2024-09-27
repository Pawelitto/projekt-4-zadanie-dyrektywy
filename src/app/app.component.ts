import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { driver } from './interfaceDriver';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'projekt-4-zadanie-dyrektywy';
  drivers: driver[] = [
    {
      firstName: 'Lewis',
      lastName: 'Hamilton',
      country: 'United Kingdom',
      wins: 103,
      team: 'Mercedes',
    },
    {
      firstName: 'Max',
      lastName: 'Verstappen',
      country: 'Netherlands',
      wins: 47,
      team: 'Red Bull Racing',
    },
    {
      firstName: 'Charles',
      lastName: 'Leclerc',
      country: 'Monaco',
      wins: 5,
      team: 'Ferrari',
    },
    {
      firstName: 'Sebastian',
      lastName: 'Vettel',
      country: 'Germany',
      wins: 53,
      team: 'Aston Martin',
    },
    {
      firstName: 'Fernando',
      lastName: 'Alonso',
      country: 'Spain',
      wins: 32,
      team: 'Alpine',
    },
  ];
}
