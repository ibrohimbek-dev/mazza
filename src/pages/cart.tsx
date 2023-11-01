import React, { useState, useEffect } from "react";
import { FiLogOut, FiShare2, FiHome } from "react-icons/fi";
import { BiFoodMenu } from "react-icons/bi";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { MyCart, FoodMenu } from "@/interfaces/app.interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";

import {
  doc,
  getDocs,
  deleteDoc,
  collection,  
} from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import Image from "next/image";
import IncDec from "@/helpers/inc-dec";

const Cart = () => {
  const [cartItems, setCartItems] = useState<MyCart[] | null>([]);
  const { logout, user } = useAuth();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (user && user.uid) {
          const querySnapshot = await getDocs(collection(db, user?.uid));
          const fetchedCartItems: MyCart[] = [];

          querySnapshot.forEach((doc) => {
            const cartItem = {
              userId: doc.data().userId,
              product: doc.data().product,
              docId: doc.id,
            };

            fetchedCartItems.push(cartItem);
          });

          setCartItems(fetchedCartItems);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [user, user?.uid]);

  const calculateTotalPrice = () => {
    if (!cartItems) {
      return 0;
    }

    const totalPrice = cartItems.reduce((total, item) => {
      return total + (item.product.price || 0);
    }, 0);

    return totalPrice;
  };

  const router = useRouter();

  const handleSignOut = () => {
    logout();
    router.push("/");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share this website with others!",
          text: "Find this page useful!",
          url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
        })
        .then(() => console.log("Shared successfully!"))
        .catch((error) => console.error("Sharing failed:", error));
    } else {
      alert("Sharing this page is not supported by your browser.");
    }
  };

  const checkOutCart = () => {
    alert("Coming soon!");
  };

  const removeItem = async (itemId: string) => {
    try {      
      const userId = user?.uid;
      if (userId && itemId) {
        const documentRef = doc(db, user?.uid, itemId);
        await deleteDoc(documentRef);
        toast.success("Savatchadan o'chirildi!", {
          icon: <FaTrash size={20} />,
        });

        setCartItems((prevCartItems) => {
          if (prevCartItems === null) return null;
          return prevCartItems.filter((item) => item.docId !== itemId);
        });
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div className="container py-5 cart-section">
      <ToastContainer />
      <h1 className="text-center mb-4">Savdo Savatchangiz!</h1>
      {cartItems?.length === 0 ? (
        <p>Savatchangiz bo'sh.</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Mahsulot</th>
                <th scope="col">Haqida</th>
                <th scope="col">Miqdori</th>
                <th scope="col">Narx</th>
                <th scope="col">Surat</th>
                
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item, index) => (
                <>
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.product.name}</td>

                    <td>{item.product.desc}</td>
                    <td className="text-danger text-bold pointer">
                      <IncDec/>
                    </td>                    
                    <td className="text-danger text-bold">₩. {item.product.price}</td>                    
                    <td>
                      <Image
                        src={item.product.image || ""}
                        alt={item.product.desc || ""}
                        className="img-fluid rounded"
                        style={{ maxWidth: "100px" }}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeItem(item.docId || "")}
                      >
                        O'chirish
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>

          <div className="text-end">
            <h4>Jami: ₩.{calculateTotalPrice()}</h4>
            <button onClick={checkOutCart} className="btn btn-primary">
              Checkout
            </button>
          </div>
        </>
      )}
      <div className="mt-5 cart-section-links">
        <button className="btn btn-danger mt-2 btn-block" onClick={handleSignOut}>
          <FiLogOut className="me-2" />
          A'zolikni bekor qilish
        </button>
        <Link href="/" className="btn mt-2 btn-primary btn-block" passHref>
          <FiHome className="me-2" />
          Bosh sahifaga qaytish
        </Link>
        <button className="btn mt-2 btn-info btn-block" onClick={handleShare}>
          <FiShare2 className="me-2" />
          Ulashish
        </button>
        <Link href="/#menu" className="btn mt-2 btn-secondary btn-block" passHref>
          <BiFoodMenu className="me-2" />
          Taomnoma
        </Link>
      </div>
    </div>
  );
};

const CartProps = () => (
  <>
    <ToastContainer autoClose={2000} closeOnClick limit={2} />
    <Cart />
  </>
);

export default CartProps;
