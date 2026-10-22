import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tabla-multiplicar',
  standalone: false,
  styleUrl: './menu-tabla-multiplicar.css',
  templateUrl: './menu-tabla-multiplicar.html',
})
export class MenuTablaMultiplicar {
  public random!: Array<number>
  ngOnInit() {
    this.random = []
    for (let i = 0; i <= 5; i++) {
      let n = Math.floor(Math.random() * 120) + 1;
      this.random.push(n);
    }
  }
}
