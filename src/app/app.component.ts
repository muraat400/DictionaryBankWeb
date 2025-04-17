import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordService, WordsData, Word } from './word.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wordsData!: WordsData;
  title = 'DictionaryBankWeb';

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.wordService.getWords().subscribe(data => {
      this.wordsData = data;
    });
  }
}
