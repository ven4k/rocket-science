import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../hotels.json";
import { ICheckbox } from "../components/HotelFilter/HotelFilter";

const enum countriesEnum {
  Azerbaijan = "Азербайджан",
  Greece = "Греция",
  Algeria = "Алжир",
  Angola = "Ангола",
  Russia = "Россия",
  Germany = "Германия",
}

interface IHotels {
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

interface IinitialState {
  filters: {
    countries: ICheckbox[];
    hotelType: ICheckbox[];
    countStars: ICheckbox[];
    minPrice: number;
    maxPrice: number;
    feedbackCount: number;
  };
  hotelData: IHotels[];
}

const initialState: IinitialState = {
  filters: {
    countries: [
      { name: countriesEnum.Azerbaijan, checked: false },
      { name: countriesEnum.Greece, checked: false },
      { name: countriesEnum.Algeria, checked: false },
      { name: countriesEnum.Angola, checked: false },
      { name: countriesEnum.Russia, checked: false },
      { name: countriesEnum.Germany, checked: false },
    ],
    hotelType: [
      { name: "Аппартаменты", checked: false },
      { name: "Отель", checked: false },
    ],
    countStars: [
      { name: "1 звезда", checked: false, rating: 1 },
      { name: "2 звезды", checked: false, rating: 2 },
      { name: "3 звезды", checked: false, rating: 3 },
      { name: "4 звезды", checked: false, rating: 4 },
      { name: "5 звёзд", checked: false, rating: 5 },
    ],
    minPrice: 0,
    maxPrice: 100500,
    feedbackCount: 0,
  },
  hotelData: data.hotels,
};

export const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    addCountries: (state, action: PayloadAction<ICheckbox[]>) => {
      state.filters.countries = action.payload;
    },
    addHotelType: (state, action: PayloadAction<ICheckbox[]>) => {
      state.filters.hotelType = action.payload;
    },
    addCountStars: (state, action: PayloadAction<ICheckbox[]>) => {
      state.filters.countStars = action.payload;
    },
    addMinPrice: (state, action: PayloadAction<number>) => {
      state.filters.minPrice = action.payload;
    },
    addMaxPrice: (state, action: PayloadAction<number>) => {
      state.filters.maxPrice = action.payload;
    },
    addFeedbackCount: (state, action: PayloadAction<number>) => {
      state.filters.feedbackCount = action.payload;
    },
    filters: (state) => {
 
     
      // if (state.filters.hotelType) {
      //   state.hotelData.filter((el) => {
      //     state.filters.hotelType.map((item) => {
      //       return item.checked && el.type === item.name;
      //     });
      //   });
      // }
      // if (state.filters.countStars) {
      //   state.hotelData.filter((el) => {
      //     state.filters.countStars.map((item) => {
      //       return item.checked && Math.floor(el.rating) === item.rating;
      //     });
      //   });
      // }
      // if (state.filters.countStars) {
      //   state.hotelData.filter((el) => {
      //     return (
      //       state.filters.minPrice === el.min_price ||
      //       state.filters.maxPrice === el.min_price
      //     );
      //   });
      // }
      // if (state.filters.feedbackCount) {
      //   state.hotelData.filter((el) => {
      //     return state.filters.feedbackCount === el.reviews_amount;
      //   });
      // }
      // return state;
    },
  },
});
export const {
  addCountries,
  addHotelType,
  addCountStars,
  addMinPrice,
  addMaxPrice,
  addFeedbackCount,
  filters,
} = hotelSlice.actions;
