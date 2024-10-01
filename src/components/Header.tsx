"use client";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import "../app/globals.css";
import FooterFrontPage from "./Footer";
import Link from "next/link";
import Content from "@/container/LandingPage/Content";
function FrontPage() {
  return (
    <>
      <div className=" grid p-16 justify-between md:px-5 md:py-4 sm:flex ">
        <section>
          <h1 className="space-x-2 p-0.5 sm:p-0 pb-4 flex flex-row items-center">
            <AcUnitIcon className=" text-white bg-mainCol text-4xl rounded-3xl" />
            <span className="text-3xl font-mono font-bold">
              <span className="text-mainCol text-3xl font-mono font-bold pt-4 pr-2">
                Snippet
              </span>
              Wizard
            </span>
          </h1>
        </section>

        <section className="grid sm:flex space-y-4 sm:space-y-0 sm:space-x-4 px-8 py-2 bg-mainCol text-white rounded-2xl text-2xl sm:text-sm ">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <Link href="/my-notes">
              <button type="button">Access The App</button>
            </Link>
            <UserButton />
          </SignedIn>
        </section>
      </div>
      <Content />
      <FooterFrontPage />
    </>
  );
}
export default FrontPage;
