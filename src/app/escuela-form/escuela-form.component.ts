import { Component } from '@angular/core';
import { Escuela } from '../models/escuela';
import { NgFor } from '@angular/common';
import { EscuelaService } from '../services/escuela.service';


@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [NgFor],
  templateUrl: './escuela-form.component.html',
  styleUrl: './escuela-form.component.css'
})
export class EscuelaFormComponent {
  escuelas:Escuela[]=[];
  constructor(
    private escuelaService:EscuelaService
  ){}
  ngOnInit(){
    this.listarAutores();
  }

  listarAutores(){
    this.escuelaService.getEscuelas().subscribe((data)=>{
      this.escuelas=data;
    });
  }

}