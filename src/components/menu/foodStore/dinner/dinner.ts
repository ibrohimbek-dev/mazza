import { useEffect, useState } from "react";
import { MenuItem } from "../../menu.props";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/firebase/firebase.config";

const useDinnerFood = (): MenuItem[] => {
  const [dinnerFood, setDinnerFood] = useState<MenuItem[]>([]);

  useEffect(() => {
    const menuItemsData: MenuItem[] = [
      {
        image: "menu-1.jpg",
        name: "For Dinner",
        price: 11,
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

          try {
            // Construct a reference to the image in Firebase Storage
            const imageRef = ref(storage, `mazza-food-images/dinner/${image}`);            

            // Fetch the download URL for the image
            const url = await getDownloadURL(imageRef);

            return { ...otherData, image: url, itemId };
          } catch (error) {
            console.error("Error fetching image from Firebase Storage:", error);
            return { ...otherData, image: "", itemId };
          }
        })
      );
      setDinnerFood(importedImages);
    };

    importImages();
  }, []);

  return dinnerFood;
};

export default useDinnerFood;