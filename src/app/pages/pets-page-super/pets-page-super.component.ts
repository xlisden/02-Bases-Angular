import { Component, inject, signal } from '@angular/core';
import { PetListComponent } from '../../components/pets/pet-list/pet-list.component';
import { Pet } from '../../interfaces/pet.interface';
import { PetAddComponent } from '../../components/pets/pet-add/pet-add.component';
import { PetService } from '../../services/pet.service';



@Component({
  selector: 'pets-super',
  templateUrl: './pets-page-super.component.html',
  standalone: true,
  imports: [
    PetListComponent, PetAddComponent
  ],
})
export class PetsPageSuperComponent {

  public petService = inject(PetService);



}
