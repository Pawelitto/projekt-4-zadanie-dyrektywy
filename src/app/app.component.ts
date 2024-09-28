import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Driver } from './interfaceDriver';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'projekt-4-zadanie-dyrektywy';
  loading: boolean = true;
  drivers: Driver[] = [];
  columns: string[] = [
    'driver_number',
    'full_name',
    'team_name',
    'headshot_url',
    'country_code',
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDrivers();
  }

  fetchDrivers(): void {
    const apiUrl = 'https://api.openf1.org/v1/drivers?session_key=9158';
    this.loading = true;
    this.http.get<Driver[]>(apiUrl).subscribe(
      (data) => {
        this.drivers = data.map((driver) => {
          return this.columns.reduce((acc, key) => {
            acc[key] = driver[key];
            return acc;
          }, {} as any);
        });
        this.loading = false;
      },
      (error) => {
        console.error('Błąd podczas pobierania danych:', error);
        this.loading = false;
      }
    );
  }

  objectKeys(obj: object): string[] {
    return Object.keys(obj);
  }
}
