import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

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
      price: 20394,
      time: '6 месяцев'
    },
    {
      title: 'Скаммер',
      price: 10699,
      time: '6 месяцев'
    }, {
      title: 'Скаммер',
      price: 15200,
      time: '6 месяцев'
    }, {
      title: 'Скаммер',
      price: 15200,
      time: '6 месяцев'
    }, {
      title: 'Скаммер',
      price: 15200,
      time: '6 месяцев'
    }, {
      title: 'Скаммер',
      price: 15200,
      time: '6 месяцев'
    },
  ];
  cart = {
    items: Array<boolean>(this.courses.length),
    s: 0,
    c: 0,
  };

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

  addItem(i: number) {
    this.cart.c++;
    this.cart.items[i] = true;
    this.cart.s += this.courses[i].price;
  }

  declOfNum(n: number, text_forms: any) {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }

  removeItem(i: number) {
    this.cart.c--;
    this.cart.items[i] = false;
    this.cart.s -= this.courses[i].price;

  }

}
