import React, { useState, useEffect } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function Login() {
    const [pda,setPDA] = useState("");
    const [password,setPassword] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            grecaptcha.ready(() => {
                grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: "login" }).then((token) => {
                    setToken(token); 
                });
            });
        };
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const { executeRecaptcha } = useGoogleReCaptcha();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!executeRecaptcha) return;
    const token = await executeRecaptcha("login");

    const response = await fetch("/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ pda: e.target.pda.value, password: e.target.password.value, token })
    });

    if (response.ok) {
      console.log("SUCCESS!");
    } else {
      console.log("FAILURE!");
    }
  };
    return (
      <>
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-worksans">
          <div className="sm:mx-auto sm:w-full px-4 sm:px-10 sm:max-w-md">
            <h2 className="text-3xl md:text-5xl font-inter font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Sign in to your account</h2>
            <p className="mt-3 text-sm md:text-lg leading-6">
              Or{' '}
              <a href="#" className="font-medium relative after:bg-secondary after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer">
                Sign up for a new account
              </a>
            </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-background px-4 sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit} action="#" method="POST">
                <div>
                <input
                  id="pda"
                  name="pda"
                  type="text"
                  autoComplete="off"
                  className="block w-full shadow-sm px-2 py-1 md:py-3 md:px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="PDA No."
				  required
                  value={pda}
				  onChange={(e)=>setPDA(e.target.value)}
                />
              </div>
  
                <div>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      required
                      className="block w-full shadow-sm px-2 py-1 md:py-3 md:px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm md:text-lg text-gray-900">
                      Remember me
                    </label>
                  </div>
  
                  <div className="text-sm md:text-lg">
                    <a href="#" className="font-medium relative after:bg-secondary after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer">
                      Forgot your password?
                    </a>
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-2 py-1 md:py-3 md:px-6 border border-transparent shadow-sm text-white font-medium rounded-md bg-accent hover:backdrop-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  