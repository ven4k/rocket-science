import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { original } from "immer";
import data from "../hotels.json";
import { ICheckbox, IHotel, IinitialState } from "../types/types";

const enum countriesEnum {
  Azerbaijan = "Азербайджан",
  Greece = "Греция",
  Algeria = "Алжир",
  Angola = "Ангола",
  Russia = "Россия",
  Germany = "Германия",
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
      { name: "Апартаменты", checked: false },
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
  reservedHotels: [],
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
    reserveHotel(state, action: PayloadAction<{ hotel: IHotel }>) {
      state.reservedHotels = [...state.reservedHotels, action.payload.hotel];
    },
    unreserveHotel(state, action: PayloadAction<{ hotel: IHotel }>) {
      state.reservedHotels = state.reservedHotels.filter((item) => {
        return original(item) !== action.payload.hotel;
      });
    },
    filters: (state) => {
      const newCountry = state.filters.countries.filter((el) => el.checked);
      const newHotelType = state.filters.hotelType.filter((el) => el.checked);
      const newStars = state.filters.countStars.filter((el) => el.checked);

      if (newCountry.length) {
        let newHotels = state.hotelData.filter((el) =>
          newCountry.some((item) => el.country === item.name)
        );
        state.hotelData = [...newHotels];
      }
      if (newHotelType.length) {
        let newHotels = state.hotelData.filter((el) =>
          newHotelType.some((item) => el.type === item.name)
        );
        state.hotelData = [...newHotels];
      }
      if (newStars.length) {
        let newHotels = state.hotelData.filter((el) =>
          newStars.some((item) => Math.floor(el.rating) === item.rating)
        );
        state.hotelData = [...newHotels];
      }
      if (state.filters.minPrice >= 0) {
        let newHotels = state.hotelData.filter(
          (el) =>
            Math.floor(el.min_price) >= state.filters.minPrice &&
            Math.floor(el.min_price) <= state.filters.maxPrice
        );
        state.hotelData = [...newHotels];
      }
      if (state.filters.feedbackCount >= 0) {
        let newHotels = state.hotelData.filter(
          (el) => el.reviews_amount >= state.filters.feedbackCount
        );
        state.hotelData = [...newHotels];
      }
    },
    resetFilters: (state) => {
      state.hotelData = initialState.hotelData;
      state.filters.countStars = initialState.filters.countStars;
      state.filters.countries = initialState.filters.countries;
      state.filters.feedbackCount = initialState.filters.feedbackCount;
      state.filters.hotelType = initialState.filters.hotelType;
      state.filters.maxPrice = initialState.filters.maxPrice;
      state.filters.minPrice = initialState.filters.minPrice;
    },
    resetHotels: (state) => {
      state.hotelData = initialState.hotelData;
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
  reserveHotel,
  unreserveHotel,
  filters,
  resetFilters,
  resetHotels,
} = hotelSlice.actions;
