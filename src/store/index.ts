import { FoodMenu } from "@/interfaces/app.interface";
import {create} from "zustand";

interface InfoState {  
  modal: boolean;
  setModal: (bool: boolean) => void;
  currentFood: FoodMenu;  
  setCurrentFood: (food: FoodMenu) => void;
}

export const useInfoStore = create<InfoState>()(set => ({
  modal: false,
  setModal: (bool: boolean) => set(state => ({...state, modal: bool})),
  currentFood: {} as FoodMenu,
  setCurrentFood: (food: FoodMenu) => set(state => ({...state, currentFood: food}))
}))