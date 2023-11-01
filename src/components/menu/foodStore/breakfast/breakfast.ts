import { useEffect, useState } from "react";
import { MenuItem } from "../../menu.props";
import { v4 as uuidv4 } from "uuid";

const useBreakfastFood = (): MenuItem[] => {
  const [breakfastFoods, setBreakfastFoods] = useState<MenuItem[]>([]);

  useEffect(() => {
    const menuItemsData: MenuItem[] = [
      {
        image: "menu-1.jpg",
        name: "For BreakFast",
        price: 10,
        desc: "Lorem ipsum",
        vote: 5,
      },
      {
        image: "menu-2.jpg",
        name: "Cheeseburger",
        price: 8,
        desc: "Lorem ipsum",
        vote: 5,
      },
      {
        image: "menu-3.jpg",
        name: "Cheeseburger",
        price: 8,
        desc: "Lorem ipsum",
        vote: 5,
      },
      {
        image: "menu-4.jpg",
        name: "Cheeseburger",
        price: 8,
        desc: "Lorem ipsum",
        vote: 2,
      },
      {
        image: "menu-5.jpg",
        name: "Cheeseburger",
        price: 8,
        desc: "Lorem ipsum",
        vote: 3,
      },
    ];

    const importImages = async () => {
      const importedImages = await Promise.all(
        menuItemsData.map(async (menuItem) => {
          const itemId = uuidv4();
          const { image, ...otherData } = menuItem;
          const imageModule = await import(`@/components/menu/foodStore/breakfast/breakfastImgs/${image}`);
          return { ...otherData, image: imageModule.default, itemId };
        })
      );
      setBreakfastFoods(importedImages);
    };

    importImages();
  }, []);

  return breakfastFoods;
};

export default useBreakfastFood;