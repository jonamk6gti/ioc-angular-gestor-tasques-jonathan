import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CategoriaTasca, FiltresTasca } from '../../models/tasca.model';

@Component({
  imports: [FormsModule],
  selector: 'app-filtres-tasques',
  styleUrl: './filtres-tasques.component.scss',
  templateUrl: './filtres-tasques.component.html',
})
export class FiltresTasques {
  @Input({ required: true }) categories: CategoriaTasca[] = [];
  @Output() aplicar = new EventEmitter<FiltresTasca>();
  @Output() restablir = new EventEmitter<void>();

  readonly longitudMinima = 3;
  text = '';
  categoria: CategoriaTasca | '' = '';

  onAplicar(): void {
    this.aplicar.emit({ text: this.text.trim(), categoria: this.categoria });
  }

  onRestablir(form: NgForm): void {
    form.resetForm({ text: '', categoria: '' });
    this.restablir.emit();
  }
}
