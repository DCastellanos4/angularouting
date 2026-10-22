import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
//Estas 2 librerias para los parametros
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
@Component({
  selector: 'app-tabla-multiplicar',
  standalone: false,
  styleUrl: './tabla-multiplicar.css',
  templateUrl: './tabla-multiplicar.html',
})
export class TablaMultiplicar {
  public numero!: number;
  public lista!: Array<number>
  constructor(private _activeRouter: ActivatedRoute, private _router: Router, private _cdr: ChangeDetectorRef) {
    this.numero = 0;
  }
  ngOnInit() {
    this._activeRouter.params.subscribe((parametros: Params) => {
      if (parametros['numero'] != null) {
        this.numero = parametros['numero'];
        this.lista = [];
        for (let i = 1; i <= 10; i++) {
          this.lista.push(this.numero * i);
        }
        this._cdr.detectChanges();
      }
    })
  }
}
