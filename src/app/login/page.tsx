"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Dialog, DialogPanel } from "@headlessui/react";

const Login = () => {
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted", { email, password, rememberMe });
  };

  return (
    <div className="mx-auto lg:h-screen max-w-screen-xl flex lg:mt-20 justify-center">
      <div className="lg:grid grid-cols-3 gap-4 p-6 rounded-lg">
        <div className="lg:col-span-2 mr-4">
          <div>
            <h3 className="text-white font-semibold mb-2.5">
              The Ultimate Erotic Entertainment
            </h3>
            <p className="text-[14px] text-[#9b9b9b] !mb-8">
              We have been online since 1997 and are the world’s largest adult
              directory with over 100 locations worldwide.We pride ourselves in
              quality viewers, quality results, customer service and advertiser
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
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div className="w-full max-w-md p-6 rounded-lg bg-black">
              <h1 className="text-xl font-semibold text-white mb-6 ">
                Log into account
              </h1>

              <form
                onSubmit={handleSubmit}
                onClick={open}
                className="space-y-4 px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform  focus:outline-none focus:ring focus:ring-opacity-80"
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
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
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
                       hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                >
                  LOG INTO MY ACCOUNT
                </button>

                <button
                  type="button"
                  className="w-full py-2 px-4 border border-neutral-600 text-white rounded-md 
                       hover:bg-neutral-800 transition-colors duration-200"
                >
                  CREATE NEW ACCOUNT
                </button>
              </form>
              <Dialog
                open={isOpen}
                as="div"
                className="relative z-10 focus:outline-none"
                onClose={close}
              >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                      transition
                      className="w-full rounded-xl backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                      <div className="min-h-screen w-full flex items-center justify-center bg-black/50 p-4">
                        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <h2 className="text-base font-medium text-gray-900">
                                Device Verification 1/2
                              </h2>
                              <p className="text-sm text-gray-600">
                                Please enter a Verification code for EROSADS
                                from your Google Authenticator app:
                              </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                              <input
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                className="w-full h-10 p-1 bg-gray-50 text-black outline-none"
                                placeholder="___ ___"
                              />

                              <p className="text-sm text-gray-600">
                                Having trouble receiving the Code. You can
                                contact the{" "}
                                <Link
                                  href="/login"
                                  className="text-amber-600 hover:text-amber-700"
                                >
                                  Support
                                </Link>
                                .
                              </p>

                              <div className="flex justify-end space-x-3">
                                <Button
                                  type="button"
                                  className="text-gray-600 hover:text-gray-900"
                                >
                                  CANCEL
                                </Button>
                                <Button
                                  type="submit"
                                  className="bg-gray-900 py-1 px-2 rounded text-white hover:bg-gray-800"
                                >
                                  VERIFY
                                </Button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </Dialog>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
