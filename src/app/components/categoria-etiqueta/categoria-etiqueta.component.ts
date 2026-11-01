import { Component, Input } from '@angular/core';
import { CategoriaTasca } from '../../models/tasca.model';

@Component({
  imports: [],
  selector: 'app-categoria-etiqueta',
  styleUrl: './categoria-etiqueta.component.scss',
  templateUrl: './categoria-etiqueta.component.html',
})
export class CategoriaEtiqueta {
  @Input({ required: true }) categoria!: CategoriaTasca;
  @Input() prioritaria = false;

  get classeCategoria(): string {
    return 'etiqueta--' + this.categoria.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
}
