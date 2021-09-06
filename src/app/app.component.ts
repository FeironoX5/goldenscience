import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newsIndex = 0;
  openTeam = false;
  news = [
    {
      text: '1Команда Олмат проводит выездные сборы, математические игры и олимпиады, на которых дети могут систематизировать знания, выйти за рамки школьной программы, подготовиться к экзаменам и побыть в кругу единомышленников.',
      author: 'Сбер.Про'
    },
    {
      text: '2Команда Олмат проводит выездные сборы, математические игры и олимпиады, на которых дети могут систематизировать знания, выйти за рамки школьной программы, подготовиться к экзаменам и побыть в кругу единомышленников.',
      author: 'Сбер.Про'
    },
    {
      text: '3Команда Олмат проводит выездные сборы, математические игры и олимпиады, на которых дети могут систематизировать знания, выйти за рамки школьной программы, подготовиться к экзаменам и побыть в кругу единомышленников.',
      author: 'Сбер.Про'
    },
  ];
  courses = [
    {
      title: 'Маркетолог',
      price: '3 490 руб/мес',
      time: '6 месяцев'
    }
  ];
  cart = [false];
  newsNext() {
    this.newsIndex++;
    if (this.newsIndex >= this.news.length) {
      this.newsIndex = 0;
    }
  }
  newsPrev() {
    if (this.newsIndex == 0) {
      this.newsIndex = this.news.length - 1;
    } else {
      this.newsIndex--;
    }
  }
}
