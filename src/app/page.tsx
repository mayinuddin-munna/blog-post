"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FaCheck } from "react-icons/fa";

export default function Home() {
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted", { email, password, rememberMe });
    setIsOpen(true); // Open verification popup after login
  };

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === "123456") {
      setVerificationSuccess(true); // Show success screen on correct code
      setIsOpen(false); // Close the popup
    } else {
      alert("Invalid verification code. Please try again.");
    }
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  // Render success screen if verification is successful
  if (verificationSuccess) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full flex flex-col items-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-emerald-600 text-emerald-600 mb-4">
            <FaCheck className="w-8 h-8" />
          </div>
          <p className="text-emerald-600 text-lg font-medium">
            Verification successful
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="mx-auto relative max-w-screen-xl flex lg:mt-20 justify-center"
      style={{ height: "82vh" }}
    >
      <div className="lg:grid grid-cols-3 gap-4 p-6 rounded-lg">
        <div className="lg:col-span-2 mr-4">
          <div>
            <h3 className="text-white font-semibold mb-2.5">
              The Ultimate Erotic Entertainment
            </h3>
            <p className="text-[14px] text-[#9b9b9b] !mb-8">
              We have been online since 1997 and are the world’s largest adult
              directory with over 100 locations worldwide. We pride ourselves in
              quality viewers, quality results, customer service, and advertiser
              satisfaction.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2.5">
              What Types of Ads Do You Offer?
            </h3>
            <p className="text-[14px] text-[#9b9b9b] !mb-8">
              We offer a wide variety of advertising options. Most advertisers
              start with a standard ad or visiting ad, and then customize their
              ads with such options as VIP upgrades or Premier Services to drive
              even more traffic to them. Both standard and visiting ads include
              an elegant full page ad with up to 8 photos.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2.5">
              What Does My Purchase Cover?
            </h3>
            <p className="text-[14px] text-[#9b9b9b] !mb-8">
              By purchasing an ad on the Eros Guide, you have secured a
              beautifully laid-out advertisement on the premier website for
              adult entertainment services. Since 1997 we have been dedicated to
              bringing you high quality traffic, and it shows. Of course every
              provider is unique and we cannot guarantee you a specific number
              of leads from your advertisement. But we do know what it takes to
              maintain great site traffic – both quality and quantity – and what
              types of things you can do to take maximum advantage of that
              traffic. Which is why at Eros you have access to the best customer
              service and sales staff in the industry. We are here to answer
              your questions and help you make the most of your advertising
              experience with the Eros Guide.
            </p>
          </div>
        </div>
        <div className="grid justify-center rounded-md">
          <div className="space-y-6">
            <div className="w-full max-w-md px-3 py-8 rounded-lg bg-black">
              <h1 className="text-xl ml-5 font-semibold text-white mb-6">
                Log into account
              </h1>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-opacity-80"
              >
                <div>
                  <input
                    type="email"
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white/90 border border-neutral-600 rounded-md 
              text-black placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password*"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 bg-white/90 border border-neutral-600 rounded-md 
              text-black placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-300"
                  ></button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-neutral-600 bg-neutral-700 text-yellow-600 
                focus:ring-offset-0 focus:ring-1 focus:ring-yellow-600"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm text-white"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-yellow-500 hover:text-yellow-400"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-yellow-500 text-yellow-500 rounded-md 
              hover:bg-yellow-500/50 hover:text-white transition-colors duration-200"
                >
                  LOG INTO MY ACCOUNT
                </button>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-white text-white rounded-md 
              hover:bg-white/30 transition-colors duration-200"
                >
                  LOG INTO MY ACCOUNT
                </button>
              </form>

              <Dialog
                open={isOpen}
                as="div"
                className="relative z-10 focus:outline-none"
                onClose={closePopup}
              >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h2 className="text-base font-medium text-gray-900">
                            Device Verification
                          </h2>
                          <p className="text-sm text-gray-600">
                            Please enter the verification code from your Google
                            Authenticator app:
                          </p>
                        </div>

                        <form
                          onSubmit={handleVerification}
                          className="space-y-4"
                        >
                          <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 text-black border border-gray-300 rounded outline-none"
                            placeholder="___ ___"
                          />

                          <p className="text-sm text-gray-600">
                            Having trouble receiving the code?{" "}
                            <Link
                              href="/login"
                              className="text-amber-600 hover:text-amber-700"
                            >
                              Contact Support
                            </Link>
                          </p>

                          <div className="flex justify-end space-x-3">
                            <button
                              type="button"
                              onClick={closePopup}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              CANCEL
                            </button>
                            <button
                              type="submit"
                              className="bg-gray-900 py-1 px-2 rounded text-white hover:bg-gray-800"
                            >
                              VERIFY
                            </button>
                          </div>
                        </form>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
