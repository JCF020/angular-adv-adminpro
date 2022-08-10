import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');
  url: any = '';

  constructor() {
    this.url = localStorage.getItem('theme');
    this.linkTheme?.setAttribute('href', this.url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    //this.checkCurrentTheme();
  }
}
