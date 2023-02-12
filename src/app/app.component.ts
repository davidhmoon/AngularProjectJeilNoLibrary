import { Component } from '@angular/core';
import { HotelDataService } from './services/hotel-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-scratch';
  hotels = [];
  filtered_hotel: any;
  search: string = "";
  page: number = 1;
  message: string = "";

  constructor(private hotelData: HotelDataService) {
    this.hotelData.hotels().subscribe((data: any) => {
      this.hotels = data

    })
  }

  onChange(event: any) {
    this.search = event;
    this.filtered_hotel = this.getFiltered();


    if (this.filtered_hotel.length < 1)
      this.message = "Error 404: No Search Results";
    else
      this.message = "";
  }


  onChangePage(event: any) {
    this.page = Number(event);
    this.filtered_hotel = this.getFiltered();
    if (this.filtered_hotel.length < 1)
      this.message = "Error 404: No Search Results";
    else
      this.message = "";
  }

  getFiltered() {
    const PAGE_SIZE = 3;
    const result = this.hotels.filter((row: any) => row.name.toLowerCase().includes(this.search.toLowerCase()));
    let start = (this.page - 1) * PAGE_SIZE;
    let end = this.page * PAGE_SIZE;


    return result.slice(start, end);
  }

}