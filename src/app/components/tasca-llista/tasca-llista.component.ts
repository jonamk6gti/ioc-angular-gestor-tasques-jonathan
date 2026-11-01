import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasca } from '../../models/tasca.model';
import { TascaTargeta } from '../tasca-targeta/tasca-targeta.component';

@Component({
  imports: [TascaTargeta],
  selector: 'app-tasca-llista',
  styleUrl: './tasca-llista.component.scss',
  templateUrl: './tasca-llista.component.html',
})
export class TascaLlista {
  @Input({ required: true }) tasques: Tasca[] = [];
  @Input() idSeleccionada: number | null = null;
  @Output() seleccionar = new EventEmitter<Tasca>();

  onSeleccionar(tasca: Tasca): void {
    this.seleccionar.emit(tasca);
  }
}
