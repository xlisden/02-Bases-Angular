import { Component, input } from '@angular/core';
import type { Pet } from '../../../interfaces/pet.interface';

@Component({
  selector: 'pet-list',
  standalone: true,
  templateUrl: './pet-list.component.html',
})
export class PetListComponent {

  pets = input.required<Pet[]>();



}
