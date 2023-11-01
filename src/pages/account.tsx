import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiLogOut, FiShare2, FiHome, FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import Head from "next/head";
import moment from "moment";
import "moment-timezone";
import Cookies from "js-cookie";
import { AdminContact } from "@/components";

const UserAccount = () => {
  const { logout, user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("ibrohimbek2701@gmail.com");

  const handleSendEmail = () => {
    const subject = "Password Change Request";
    const body = "Hello, I'd like to request a password change.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleSignOut = () => {
    logout();
    router.push("/");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Ushbu websaytni boshqalar bilan ham ulashing!",
          text: "Ushbu sahifani foydali deb toping!",
          url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
        })
        .then(() => console.log("Muvaffaqiyatli ulashildi!"))
        .catch((error) =>
          console.error("Ulashish muvaffaqiyatsiz yakunlandi:", error)
        );
    } else {
      alert(
        "Ushbu sahifani ulashish brauzeringiz tomonidan qo'llab quvvatlanmaydi"
      );
    }
  };

  const formatCreationTime = (creationTime?: string) => {
    if (!creationTime) {
      return "Noma'lum";
    }

    const localTime = moment.utc(creationTime).local();
    return localTime.format("YYYY-MM-DD HH:mm:ss");
  };

  return (
    <>
      <Head>
        <title>Mazza | Mening Hisobim</title>
        <meta
          name="description"
          content="Xush kelibsiz Mazza Restoraniga! Bizning mehmonxonamizda eng zo'r ovqatlarni tajriba qiling va tez-tez boshqa tavsiyalarni o'qing."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="container account-settings">
        <h1 className="mt-4">Foydalanuvchi Sozlamari</h1>
        <div className="form-group mb-3">
          <label className="mb-2">Foydalanuvchi Email:</label>
          <span className="form-control">{user?.email}</span>
        </div>
        <div className="form-group mb-3">
          <label className="mb-2">Foydalanuvchi a'zo bo'lgan sana:</label>
          <span className="form-control">
            {formatCreationTime(user?.metadata?.creationTime)}
          </span>
        </div>
        <div className="form-group mb-3">
          <label className="mb-2">Foydalanuvchi paroli:</label>
          <div>
            <div className="form-control">
              <span className="d-block">parol</span>
              <a href="#">
                <i>parolni o'zgartirish</i>
              </a>
            </div>
          </div>
        </div>

        <AdminContact />
        <button
          className="btn btn-danger btn-block mb-2"
          onClick={handleSignOut}
        >
          <IconContext.Provider
            value={{ size: "1.2em", style: { verticalAlign: "middle" } }}
          >
            <div className="d-flex align-items-center">
              <FiLogOut />
              <span className="mx-2">A'zolikni bekor qilish</span>
            </div>
          </IconContext.Provider>
        </button>
        <Link className="btn btn-primary btn-block mb-2" href={"/"}>
          <IconContext.Provider
            value={{ size: "1.2em", style: { verticalAlign: "middle" } }}
          >
            <div className="d-flex align-items-center">
              <FiHome />
              <span className="mx-2">Bosh sahifaga qaytish</span>
            </div>
          </IconContext.Provider>
        </Link>
        <button className="btn btn-info btn-block  mb-2" onClick={handleShare}>
          <IconContext.Provider
            value={{ size: "1.2em", style: { verticalAlign: "middle" } }}
          >
            <div className="d-flex align-items-center">
              <FiShare2 />
              <span className="mx-2">Ulashish</span>
            </div>
          </IconContext.Provider>
        </button>
        <Link href={"/cart"} className="btn btn-success btn-block mb-2">
          <IconContext.Provider
            value={{ size: "1.2em", style: { verticalAlign: "middle" } }}
          >
            <div className="d-flex align-items-center">
              <FiShoppingCart />
              <span className="mx-2">Savatcham</span>
            </div>
          </IconContext.Provider>
        </Link>
      </div>
    </>
  );
};

export default UserAccount;
