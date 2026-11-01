import { Component, Input } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { Tasca } from '../../models/tasca.model';
import { CategoriaEtiqueta } from '../categoria-etiqueta/categoria-etiqueta.component';

@Component({
  imports: [DatePipe, DecimalPipe, CategoriaEtiqueta],
  selector: 'app-tasca-detall',
  styleUrl: './tasca-detall.component.scss',
  templateUrl: './tasca-detall.component.html',
})
export class TascaDetall {
  @Input() tasca: Tasca | null = null;
}
