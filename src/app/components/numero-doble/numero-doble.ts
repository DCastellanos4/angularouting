import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
//Estas 2 librerias para los parametros
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-numero-doble',
  standalone: false,
  styleUrl: './numero-doble.css',
  templateUrl: './numero-doble.html',
})
export class NumeroDoble implements OnInit {
  public doble!: number;
  public numero!: number
  //Recibimos el objeto inyectado de las rutas
  constructor(private _activeRoute: ActivatedRoute, private _router: Router, private _cdr: ChangeDetectorRef) {
    this.doble = 0;
  }
  ngOnInit(): void {
    //Aqui nos suscribimos a la recuperacion del parametro
    this._activeRoute.params.subscribe((parametros: Params) => {
      //Dentro de params es donde recibimos los parametros por su :name
      //la sintaxis es parametros['parametername']
      //el parametro es opcional, por lo que preguntamos
      if (parametros['numero'] != null) {
        //parametro siempre son string
        this.numero = (parseInt(parametros['numero']));
        this.doble = this.numero * 2;
        this._cdr.detectChanges();
      }

    })
  }
  redirect(num: number): void {
    this._router.navigate(["/doble", num]);
  }
  goToHome(): void {
    this._router.navigate(['/']);
  }
}
