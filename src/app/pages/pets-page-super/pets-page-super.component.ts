import { Component, signal } from '@angular/core';
import { PetListComponent } from '../../components/pets/pet-list/pet-list.component';
import { Pet } from '../../interfaces/pet.interface';
import { PetAddComponent } from '../../components/pets/pet-add/pet-add.component';



@Component({
  selector: 'pets-super',
  templateUrl: './pets-page-super.component.html',
  standalone:true,
  imports: [
    PetListComponent, PetAddComponent
  ],
})
export class PetsPageSuperComponent {

  name = signal('');
  age = signal(0);

  pets = signal<Pet[]>([
    {id: 1, name: 'Khalessi', age: 3},
    {id: 3, name: 'Chiqui', age: 0},
    // {id: 2, name: 'Brown', age: 1},
    // {id: 4, name: 'Princesa', age: 0,}
  ]);


}
