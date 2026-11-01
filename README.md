# Gestor de Tasques IOC

## Autor/a
Jonathan

## Descripció
Aplicació web desenvolupada amb Angular per gestionar les tasques diàries del curs. Mostra un llistat de tasques (estudi, pràctiques, lliuraments, reunions i tasques personals), permet filtrar-les per text i categoria, seleccionar-ne una i veure'n el detall.

## Versions utilitzades
- Node.js: v24.19.0
- npm: 11.17.0
- Angular CLI / Angular: 22.2.2
- TypeScript: 6.0.3
- Git: 2.55.0

## Instal·lació i execució
```bash
git clone https://github.com/jonamk6gti/ioc-angular-gestor-tasques-jonathan.git
cd ioc-angular-gestor-tasques-jonathan
git switch ra2-components
npm install
ng serve
```
L'aplicació queda disponible a `http://localhost:4200/`.

Altres comandes:
```bash
ng test    # tests unitaris (Vitest)
ng build   # compilació de producció a dist/
```

## Branques
- `ra1-setup`: EAC1, projecte base i personalització.
- `ra2-components`: EAC2, interfície basada en components (branca actual de lliurament).

## EAC2 - Components i interfície d'usuari

### Model i dades
- Model: `src/app/models/tasca.model.ts` (interfície `Tasca`, tipus `CategoriaTasca`, interfície `FiltresTasca`).
- Dades mock: `src/app/data/tasques.mock.ts` (12 tasques).

### Components creats (standalone)
| Component | Fitxer | Responsabilitat |
|---|---|---|
| `App` | `src/app/app.component.ts` | Component pare: conté les dades, aplica els filtres i guarda la tasca seleccionada. |
| `FiltresTasques` | `src/app/components/filtres-tasques/` | Formulari amb `FormsModule` i `[(ngModel)]` (text `required` + `minlength`, select de categoria). Emet `aplicar` i `restablir`. |
| `TascaLlista` | `src/app/components/tasca-llista/` | Rep les tasques filtrades, mostra el comptador, el llistat amb `@for` / `track` i l'estat sense resultats. Reemet `seleccionar`. |
| `TascaTargeta` | `src/app/components/tasca-targeta/` | Targeta resum d'una tasca (títol, etiqueta, data amb pipe). Emet `seleccionar` en fer clic. |
| `CategoriaEtiqueta` | `src/app/components/categoria-etiqueta/` | Subcomponent d'etiqueta amb la categoria i el distintiu de tasca prioritària. |
| `TascaDetall` | `src/app/components/tasca-detall/` | Panell de detall de la tasca seleccionada (pipes `date` i `number`). |

### Accessibilitat i responsive
- Enllaç de salt "Salta al contingut principal" cap a `<main id="contingut-principal">`.
- Focus visible amb `:focus-visible` als enllaços, botons i camps.
- `label for` associat a cada camp del formulari.
- Comptador amb `role="status"` i `aria-live="polite"`; missatge d'error amb `role="alert"`.
- Layout de llista + detall amb CSS Grid: una columna en mòbil i dues columnes a partir de 768px.

## Enllaç del repositori
https://github.com/jonamk6gti/ioc-angular-gestor-tasques-jonathan
