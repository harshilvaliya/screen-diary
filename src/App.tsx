import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  Header,
  Footer,
  SideBar,
  VideoModal,
  ScrollToTop,
  Loader,
} from "@/common";

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import Login from "./pages/login";
import Register from "./pages/login/register";

const Catalog = lazy(() => import("./pages/Catalog"));
const About = lazy(() => import("./pages/about-us"));

const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(false);
const [user, setLoginUser] = useState({});
  useEffect(() => {
    setIsLoginPage(window.location.pathname === "/login");
  }, []);
  return (
    <>
      <VideoModal />
      <SideBar />
      <Header />
      <main
        className={`${
          isLoginPage ? "bg-transparent" : "dark:bg-black bg-mainColor"
        } lg:pb-14 md:pb-4 sm:pb-2 xs:pb-1 pb-0`}
      >
        {" "}
        <ScrollToTop>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category/:id" element={<Detail />} />
              <Route path="/:category" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login/register" element={<Register />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </main>
      <Footer />
    </>
  );
};

export default App;
