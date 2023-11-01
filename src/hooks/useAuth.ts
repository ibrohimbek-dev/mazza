import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,  
} from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { auth } from "@/firebase/firebase.config";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {      
      if (user) {
        setUser(user);
        Cookies.set("user_id", user.uid);
      } else {
        setUser(null);
        Cookies.remove("user_id");
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);

        router.push("/account");
        fetch("/api/customer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: res.user.email,
            user_id: res.user.uid,
          }),
        });
        Cookies.set("user_id", res.user.uid);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        router.push("/account");
        Cookies.set("user_id", res.user.uid);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const logout = async () => {
    setIsLoading(true);

    signOut(auth)
      .then(() => {
        Cookies.remove("user_id");
        setUser(null);
        router.push("/auth");
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };  
  

  return {
    isLoading,
    error,
    user,
    signIn,
    signUp,
    logout,
    setUser,
    setIsLoading,    
  };
};


