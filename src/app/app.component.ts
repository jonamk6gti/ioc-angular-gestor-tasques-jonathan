import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CATEGORIES_TASCA, FiltresTasca, Tasca } from './models/tasca.model';
import { TASQUES_MOCK } from './data/tasques.mock';
import { FiltresTasques } from './components/filtres-tasques/filtres-tasques.component';
import { TascaLlista } from './components/tasca-llista/tasca-llista.component';
import { TascaDetall } from './components/tasca-detall/tasca-detall.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FiltresTasques, TascaLlista, TascaDetall],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  appName = 'Gestor de Tasques IOC';
  categories = CATEGORIES_TASCA;
  tasques: Tasca[] = TASQUES_MOCK;
  tasquesFiltrades: Tasca[] = TASQUES_MOCK;
  tascaSeleccionada: Tasca | null = null;

  aplicarFiltres(filtres: FiltresTasca): void {
    const text = filtres.text.toLowerCase();
    this.tasquesFiltrades = this.tasques.filter((tasca) => {
      const coincideixText =
        !text || tasca.titol.toLowerCase().includes(text) || tasca.descripcio.toLowerCase().includes(text);
      const coincideixCategoria = !filtres.categoria || tasca.categoria === filtres.categoria;
      return coincideixText && coincideixCategoria;
    });

    if (this.tascaSeleccionada && !this.tasquesFiltrades.includes(this.tascaSeleccionada)) {
      this.tascaSeleccionada = null;
    }
  }

  restablirFiltres(): void {
    this.tasquesFiltrades = this.tasques;
  }

  seleccionarTasca(tasca: Tasca): void {
    this.tascaSeleccionada = tasca;
  }
}
