import Link from "next/link";
import authBg from "./authBg/auth-bg.jpg";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { FiHome } from "react-icons/fi";
import { TextField } from "@/components";
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { GetServerSideProps } from 'next';


const Auth = () => {
  const [auth, setAuth] = useState<"signup" | "signin">("signin");
  const { error, isLoading, signIn, signUp } = useAuth();

  const toggleAuth = (state: "signup" | "signin") => {
    setAuth(state);
  };

  const onSubmit = async (formData: { email: string; password: string }) => {
    if (auth === 'signup') {
      signUp(formData.email, formData.password);
    } else {
      signIn(formData.email, formData.password);
    }
  };

	const validation = Yup.object({
    email: Yup.string().email('Enter valid email').required('Email is required'),
    password: Yup.string().min(6, '6 minimum character').required('Password is required'),
  });

  return (
    <div className="auth-container d-flex flex-column align-items-center justify-content-center">
      <Head>
        <title>Mazza | A'zo bo'lish</title>
        <meta
          name="description"
          content="yangliklardan xabardor bo'lib turish uchun a'zo bo'ling"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>      

      <Image src={authBg} alt={"bg"} fill className="auth-bg-image" />

      <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={validation}>
        <Form className="d-flex flex-column mt-4 rounded bg-white p-4 w-md max-w-md custom-form">
          <h1 className="text-center display-4 fw-bold my-4">
            {auth === "signup" ? "A'zo bo'lish" : "Kirish"}
          </h1>
          {error && <p className="text-danger text-center fw-bold">{error}</p>}
          <div className="mb-4">
            <TextField name="email" placeholder="Email" type={"text"} />
            <TextField
              name="password"
              placeholder="Password"
              type={"password"}
            />
          </div>

          <div className="d-flex">
            <Link href={"/"} className="btn btn-info w-50 rounded fw-bold">
              <FiHome size={20} color="#fff" />
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-danger w-100 py-2 rounded fw-bold"
            >
              {isLoading
                ? "Yuklanmoqda..."
                : auth === "signin"
                ? "Kirish"
                : "A'zo bo'lish"}
            </button>
          </div>
          <div className="text-center mt-3">
            {auth === "signin" ? (
              <>
                Yangimisiz?{" "}
                <Link
                  href={""}
                  type="button"
                  className="text-decoration-underline custom-link"
                  onClick={() => toggleAuth("signup")}
                >
                  A'zo bo'lish
                </Link>
              </>
            ) : (
              <>
                Oldin ro'yxatdan o'tganmisiz?{" "}
                <Link
                  href={""}
                  type="button"
                  className="text-decoration-underline custom-link"
                  onClick={() => toggleAuth("signin")}
                >
                  Kirish
                </Link>
              </>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Auth;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const user_id = req.cookies.user_id;

	if (user_id) {
		return {
			redirect: { destination: '/', permanent: false },
		};
	}

	return {
		props: {},
	};
};