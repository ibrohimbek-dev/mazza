export interface FoodMenu {
  image?: string;
  name?: string;
  price?: number;
  desc?: string;
  vote?: number; 
  itemId?: string;  
}


export interface MyCart {
  userId: string;
	product: FoodMenu;
  docId: string;  
}