import { effect, Injectable, signal } from '@angular/core';
import { Pet } from "../interfaces/pet.interface";

@Injectable({providedIn: 'root'})
export class PetService {

  // pets = signal<Pet[]>([
  //   { id: 1, name: 'Khalessi', age: 3 },
  //   { id: 3, name: 'Chiqui', age: 0 },
  //   // {id: 2, name: 'Brown', age: 1},
  //   // {id: 4, name: 'Princesa', age: 0,}
  // ]);

  pets = signal<Pet[]>(loadFromLocalStorage());

  saveToLocalStorage = effect( () => {
    localStorage.setItem('pets', JSON.stringify(this.pets()));
  })

  addPet(pet: Pet) {
    this.pets.update(
      list => [...list, pet]
    )
  }

}

const loadFromLocalStorage = (): Pet[] => {
  const pets = localStorage.getItem('pets');
  return pets ? JSON.parse(pets) : [];
}
