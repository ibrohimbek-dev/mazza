import React, { useState, useEffect } from "react";
import { ThumbnailProps } from "./thumbnail.props";
import { useInfoStore } from "@/store";
import Image from "next/image";
import ReactStars from "react-stars";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiShoppingCart } from "react-icons/fi";
import { db } from "@/firebase/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { BiPlus } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import { MyCart } from "@/interfaces/app.interface";
import IncDec from "@/helpers/inc-dec";

const Thumbnail = ({ food, index, isBig = false }: ThumbnailProps) => {
  const { setModal, setCurrentFood } = useInfoStore();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();  

  const handleCurrentFood = () => {
    setModal(true);
    setCurrentFood(food);
  };

  const addProductList = async (e: any) => {
    e.stopPropagation();
    setIsLoading(true);    

    try {
      // Create a cart item with the user's ID, the selected food item, and an empty docId field
      const cartItem: MyCart = {
        userId: user?.uid || "",
        product: food,
        docId: "", // You will fill this field after adding the document
      };

      const userId = user?.uid || "";
      const userCartCollection = collection(db, userId);

      const docRef = await addDoc(userCartCollection, cartItem);
      cartItem.docId = docRef.id;

      setIsLoading(false);
      toast.success("Savatchaga qo'shildi!", {
        icon: <FiShoppingCart size={20} />,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      setIsLoading(false);
    }
  };

 

  const orderItem = (e: any) => {
    e.stopPropagation();
    alert("Coming soon!");
  };

  const preventBuble = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div
      className="d-flex align-items-center tab-one-card food-card"
      onClick={() => handleCurrentFood()}
    >
      <Image
        className="flex-shrink-0 p-1 img-fluid rounded food-image"
        src={food.image || ""}
        alt={`Taom nomi ${food.name}`}
        width={500}
        height={500}
      />
      <div className="w-100 d-flex flex-column text-start food-content">
        <h5 className="d-flex justify-content-between border-bottom pb-2">
          <span>{food.name}</span>
          <span className="text-primary">₩.{food.price}</span>
        </h5>
        <div className="d-flex justify-content-between">
          <small className="fst-italic">{food.desc}</small>
          <ReactStars
            edit={false}
            count={5}
            value={food.vote}
            color2={"#f8cc1b"}
          />
        </div>
        <div className="thumbnail-cart-buttons">

          <button className="btn btn-info" onClick={addProductList}>
            Qo'shish
          </button>
          <IncDec/>
          {user ? (
            <button
              className="btn btn-primary mt-2"
              onClick={(e) => orderItem(e)}
            >
              Buyurtma qilish
            </button>
          ) : (
            <Link
              href={"/auth"}
              className="btn btn-success mt-2"
              onClick={(e) => preventBuble(e)}
            >
              A'zo bo'lish
            </Link>
          )}
          <Link
            href={"/cart"}
            className="btn btn-info mt-2"
            onClick={(e) => preventBuble(e)}
          >
            <FiShoppingCart className="shopping-cart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ThumbnailWithToast = ({ food, index, isBig }: ThumbnailProps) => (
  <>
    <Link href={"/cart"}>
      <ToastContainer autoClose={2000} closeOnClick limit={2} />
    </Link>
    <Thumbnail food={food} index={index} isBig={isBig} />
  </>
);

export default ThumbnailWithToast;
