import { Component, computed, signal } from '@angular/core';

interface Pet {
  id: number;
  name: string;
  age: number;
}

@Component({
  templateUrl: './pets-page.component.html',
})
export class PetsPageComponent {

  name = signal('');
  age = signal(10);

  pets = signal<Pet[]>([
    {id: 1, name: 'Khalessi', age: 3},
    // {id: 3, name: 'Chiqui', age: 0},
    // {id: 2, name: 'Brown', age: 1},
    // {id: 4, name: 'Princesa', age: 0,}
  ]);

  addPet(){
    console.log(this.name(), this.age());

    if( !this.name() || !this.age() || this.age() < 0){
      return;
    }

    const newPet: Pet = {
      id: this.pets().length + 1,
      name: this.name(),
      age: this.age()
    };

    this.pets.update((list) => [...list, newPet]);
    this.reset();
  }

  reset(){
    this.name.set('');
    this.age.set(0);
  }


}
