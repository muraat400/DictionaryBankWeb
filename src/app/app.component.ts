import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordService, WordsData, Word } from './word.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wordsData!: WordsData;
  title = 'DictionaryBankWeb';
  counter:number = 0;
  isVisible: string = "hidden";

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.wordService.getWords().subscribe(data => {
      this.wordsData = data;
    });
  }

  btnPrev(){
    this.isVisible = "hidden";
    if(this.counter > 0)
      this.counter--;
    else
      this.counter = 0;
  }
  btnNext(){
    this.isVisible = "hidden";
    if(this.counter < this.wordsData.Words.length - 1)
      this.counter++;
    else
      this.counter = this.wordsData.Words.length - 1;
  }
  btnShow(){
    this.isVisible = this.isVisible == "hidden" ? "visible" : "hidden";
  }
  btnFirst(){
    this.counter = 0;
  }
  btnLast(){
    this.counter = this.wordsData.Words.length - 1;
  }

  getWord(): Word {
    return this.wordsData.Words[this.counter];
  }

  getIndex(): number {
    return this.counter + 1;
  }

  getTotalWords(): number {
    return this.wordsData.Words.length;
  }
  onCounterChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    let inputNumber:number = parseInt(input.value, 10);
    if(inputNumber > 0 && inputNumber <= this.wordsData.Words.length){
      this.counter = inputNumber - 1;
    }
  }
}
