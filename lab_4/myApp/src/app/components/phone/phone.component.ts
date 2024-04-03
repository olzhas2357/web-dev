import {Component, OnInit} from '@angular/core';
import {diagnose} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent implements OnInit{
  image: string | undefined;
  name: string | undefined;
  price: number | undefined;
  technology: string | undefined;
  description: Description | undefined;
  options: string[] | undefined;
  constructor() {
  }
  ngOnInit() {
    this.image = "assets/apple.jpg";
    this.name = "iPhone 15 pro max";
    this.price = 560000;
    this.technology = "mobile phone";
    this.description = {
      color: 'Black',
      diagonal: '6.1 inches',
      battery_capacity: '3095.0 mAh',
      built_in_memory: '128 Gb'
    };
    this.options= ["Операционная система iOS - 15", "Поддержка 5G - Да", "Материал - металл и стекло", "SIM-карта - nano SIM + eSIM"];
  }
  phoneSelect(phoneName:string){
    if(phoneName =='sam') {
      this.image = "assets/samsung.jpg"
      this.name = "Samsung Galaxy S23 Ultra";
      this.price = 448573;
      this.technology = "mobile phone";
      this.description = {
        color: 'Black',
        diagonal: '6.8 inches',
        battery_capacity: '5000.0 mAh',
        built_in_memory: ' 256 Gb'
      };
      this.options = ["Операционная система Android 13", "Поддержка 5G - Да", "Стандарт GSM 900/1800/1900, 3G, 4G LTE, 5G", "Тип экранаDynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+"];
    }
    else if(phoneName=='xiao'){
      this.image = "assets/xiaomi.jpg"
      this.name = " Xiaomi 13 Ultra 5G ";
      this.price = 578998;
      this.technology = "mobile phone";
      this.description = {
        color: 'Green',
        diagonal: ' 6.73 inches',
        battery_capacity: '5000.0 mAh',
        built_in_memory: '512 Gb'
      };
      this.options= ["Операционная система Android 13", "Поддержка 5G - Да", "SIM-картаподдержка 2-х nano SIM-карт, попеременный режим работы", "Стандарт GSM 900/1800/1900, 3G, 4G LTE, 5G"];

    }
    else if(phoneName == 'ip'){
      this.image = 'assets/apple.jpg'
      this.name = "iPhone 15 pro max";
      this.price = 560000;
      this.technology = "mobile phone";
      this.description = {
        color: 'Black',
        diagonal: '6.1 inches',
        battery_capacity: '3095.0 mAh',
        built_in_memory: '128 Gb'
      };
      this.options= ["Операционная система iOS - 15", "Поддержка 5G - Да", "Материал - металл и стекло", "SIM-карта - nano SIM + eSIM"];

    }
    }
  shareWithTelegram(): void {
    const url = 'https://example.com'; // Замените на ваш URL
    const text = encodeURIComponent('Посмотрите этот сайт!'); // Замените текст на ваше сообщение
    window.location.href = `tg://msg_url?url=${url}&text=${text}`;
  }
  openKaspi(){
    window.location.href = 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/';
  }
  checkout(): void {
    console.log('Оформление заказа...');
    alert('Оформление заказа...')
  }
}

interface Description{
  color: string | undefined,
  diagonal: string | undefined,
  battery_capacity: string | undefined,
  built_in_memory: string | undefined
}
