import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ReversePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-basic-pipes',
  standalone: true,
  imports: [CommonModule, ReversePipe],
  templateUrl: './basic-pipes.component.html',
  styleUrl: './basic-pipes.component.css'
})
export class BasicPipesComponent {
  price: number = 12345.6789;
  currentDate: Date = new Date();
  myObject: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };
  myString: string = 'This is a STRING in Mixed CASE';
  myNumber: number = 0.23;
  myArray: any[] = ['apple', 'banana', 'orange', 'grape', 'mango'];
  longString: string = 'This is a long string.';
  titleString: string = 'this is a sentence in lowercase.';
  reverseString: string = 'Hello Angular!';
  myObservable$: Observable<number> = of(42);
  myPromise$: Promise<string> = Promise.resolve('Hello World!');
}
