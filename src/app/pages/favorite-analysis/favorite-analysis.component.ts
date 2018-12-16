import { Component, OnInit } from '@angular/core';

export interface Tile {
  articleId: string;
  cols: number;
  rows: number;
  imageUrl: string;
  show: boolean;
}

@Component({
  selector: 'app-favorite-analysis',
  templateUrl: './favorite-analysis.component.html',
  styleUrls: ['./favorite-analysis.component.css']
})
export class FavoriteAnalysisComponent implements OnInit {

  tiles: Tile[] = [
    {articleId: '1', cols: 1, rows: 1, imageUrl: '../../../assets/images/1.jpg', show: true},
    {articleId: '2', cols: 1, rows: 1, imageUrl: '../../../assets/images/2.jpg', show: true},
    {articleId: '3', cols: 1, rows: 1, imageUrl: '../../../assets/images/3.jpg', show: true},
    {articleId: '4', cols: 1, rows: 1, imageUrl: '../../../assets/images/4.jpg', show: true},
    {articleId: '5', cols: 1, rows: 1, imageUrl: '../../../assets/images/5.jpg', show: true},
    {articleId: '6', cols: 1, rows: 1, imageUrl: '../../../assets/images/6.jpg', show: true},
    {articleId: '7', cols: 1, rows: 1, imageUrl: '../../../assets/images/7.jpg', show: true},
    {articleId: '8', cols: 1, rows: 1, imageUrl: '../../../assets/images/8.jpg', show: true},
    {articleId: '9', cols: 1, rows: 1, imageUrl: '../../../assets/images/9.jpg', show: true},
    {articleId: '10', cols: 1, rows: 1, imageUrl: '../../../assets/images/10.jpg', show: true},
    {articleId: '11', cols: 1, rows: 1, imageUrl: '../../../assets/images/11.jpg', show: true},
    {articleId: '12', cols: 1, rows: 1, imageUrl: '../../../assets/images/12.jpg', show: true},
    {articleId: '13', cols: 1, rows: 1, imageUrl: '../../../assets/images/13.jpg', show: true},
    {articleId: '14', cols: 1, rows: 1, imageUrl: '../../../assets/images/1.jpg', show: true},
    {articleId: '15', cols: 1, rows: 1, imageUrl: '../../../assets/images/2.jpg', show: true},
    {articleId: '16', cols: 1, rows: 1, imageUrl: '../../../assets/images/3.jpg', show: true},
    {articleId: '17', cols: 1, rows: 1, imageUrl: '../../../assets/images/4.jpg', show: true},
    {articleId: '18', cols: 1, rows: 1, imageUrl: '../../../assets/images/5.jpg', show: true},
    {articleId: '19', cols: 1, rows: 1, imageUrl: '../../../assets/images/6.jpg', show: true},
    {articleId: '20', cols: 1, rows: 1, imageUrl: '../../../assets/images/7.jpg', show: true},
    {articleId: '21', cols: 1, rows: 1, imageUrl: '../../../assets/images/8.jpg', show: true},
    {articleId: '22', cols: 1, rows: 1, imageUrl: '../../../assets/images/9.jpg', show: true},
    {articleId: '23', cols: 1, rows: 1, imageUrl: '../../../assets/images/10.jpg', show: true},
    {articleId: '24', cols: 1, rows: 1, imageUrl: '../../../assets/images/11.jpg', show: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  addFavorite(articleId: string) {
    alert(articleId);
  }
}
