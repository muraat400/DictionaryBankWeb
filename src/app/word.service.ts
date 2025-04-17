import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Sentence {
  SentenceEn: string;
  SentenceTr: string;
}

export interface Word {
  Id: number;
  English: string;
  Turkish: string[];
  Sentence: Sentence[];
  Pronunciation: string;
  Notes: string[];
  CreatedOn: string;
  UpdatedOn: string;
}

export interface WordsData {
  Words: Word[];
}

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private jsonUrl = 'assets/Output.json';

  constructor(private http: HttpClient) { }

  getWords(): Observable<WordsData> {
    return this.http.get<WordsData>(this.jsonUrl);
  }
}