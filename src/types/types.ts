export interface ICheckbox {
  name: string;
  checked: boolean;
  id?: string;
  rating?: number;
}

export interface IHotel {
  name: string;
  country: string;
  address: string;
  stars: number;
  type: string;
  description: string;
  services: string[];
  min_price: number;
  currency: string;
  rating: number;
  reviews_amount: number;
  last_review: string;
}

export interface IinitialState {
  filters: {
    countries: ICheckbox[];
    hotelType: ICheckbox[];
    countStars: ICheckbox[];
    minPrice: number;
    maxPrice: number;
    feedbackCount: number;
  };
  hotelData: IHotel[];
  reservedHotels: IHotel[];
}
