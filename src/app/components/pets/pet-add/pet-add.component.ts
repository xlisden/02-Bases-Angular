import { Component, input, signal } from '@angular/core';
import { Pet } from '../../../interfaces/pet.interface';

@Component({
  selector: 'pet-add',
  standalone: true,
  imports: [],
  templateUrl: './pet-add.component.html'
})
export class PetAddComponent {

  // name = input.required<string>();
  // age = input.required<number>();
  name = signal('');
  age = signal(0);


  addPet(){

    if( !this.name() || !this.age() || this.age() < 0){
      return;
    }

    const newPet: Pet = {
      // id: this.pets().length + 1,
      id: 0,
      name: this.name(),
      age: this.age(),
    };

    // this.pets.update((list) => [...list, newPet]);
    console.log({ newPet });

    this.reset();
  }

  reset(){
    this.name.set('');
    this.age.set(0);
  }

}
