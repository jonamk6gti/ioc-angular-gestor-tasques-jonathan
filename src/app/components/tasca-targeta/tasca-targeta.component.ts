import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Tasca } from '../../models/tasca.model';
import { CategoriaEtiqueta } from '../categoria-etiqueta/categoria-etiqueta.component';

@Component({
  imports: [DatePipe, CategoriaEtiqueta],
  selector: 'app-tasca-targeta',
  styleUrl: './tasca-targeta.component.scss',
  templateUrl: './tasca-targeta.component.html',
})
export class TascaTargeta {
  @Input({ required: true }) tasca!: Tasca;
  @Input() seleccionada = false;
  @Output() seleccionar = new EventEmitter<Tasca>();

  onSeleccionar(): void {
    this.seleccionar.emit(this.tasca);
  }
}
