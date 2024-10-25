// import React, {useState} from "react";
// function Contact() {
// 	const baseUrl = import.meta.env.VITE_BASE_URL;
// 	// console.log("baseUrl",baseUrl);
// 	const [name,setName] = useState("");
// 	const [email,setEmail] = useState("");
// 	const [message, setMessage] = useState("");

// 	const getCSRFToken = () => {
//         let csrfToken = null;
//         const cookies = document.cookie.split(';');
//         cookies.forEach(cookie => {
//             if (cookie.trim().startsWith('csrftoken=')) {
//                 csrfToken = cookie.split('=')[1];
//             }
//         });
//         return csrfToken;
//     };

// 	const handleFormSubmit = (e) => {
// 		e.preventDefault();
// 		fetch(`${baseUrl}/contact/contacts`,{
// 			method: "POST",
// 			headers: {
//                 'Content-Type': 'application/json',
//                 'X-CSRFToken': getCSRFToken() // Add CSRF token in headers
//             },
// 			body: JSON.stringify({name,email,message})
// 		})
// 		.then(res=>console.log(res))
// 		.catch((err)=>console.log(err));
// 		setName("");
// 		setEmail("");
// 		setMessage("");
// 	}

// 	return (
// 		<div
// 			className="h-[80vh] max-w-full bg-background flex flex-col items-center my-6"
// 			id="contact">
// 			<div className="text-center">
// 				<h2 className="text-5xl font-inter font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
// 					Contact Us
// 				</h2>
// 			</div>
// 			<form className="w-1/4 h-1/2 mt-10 text-lg" onSubmit={(e)=>handleFormSubmit(e)}>
// 				<div className="flex flex-col justify-around h-full">
// 					<div className="name">
// 						<div className="mt-2.5 ">
// 							<input
// 								type="text"
// 								name="name"
// 								id="name"
// 								placeholder="Name"
// 								className="w-full px-2 py-1 font-worksans placeholder:font-worksans text-primary placeholder-primary outline-none border-b border-b-primary bg-transparent"
// 								value={name}
// 								onChange={(e)=>setName(e.target.value)}
// 							/>
// 						</div>
// 					</div>

// 					<div className="mt-2.5 ">
// 						<input
// 							type="text"
// 							name="email"
// 							id="email"
// 							placeholder="Email Address"
// 							className="w-full px-2 py-1 text-primary placeholder-primary font-worksans placeholder:font-worksans outline-none border-b border-b-primary bg-transparent"
// 							value={email}
// 							onChange={(e)=>setEmail(e.target.value)}
// 						/>
// 					</div>

// 					<div className="feedback">
// 						<div className="mt-2.5">
// 							<textarea
// 								name="message"
// 								placeholder="Send a Message"
// 								className="w-full px-4 py-4
//                        text-primary placeholder-primary font-worksans placeholder:font-worksans outline-none bg-transparent border-b border-b-primary"
// 								rows="4"
// 								value={message}
// 								onChange={(e)=>setMessage(e.target.value)}>

// 								</textarea>
// 						</div>

// 						<div className="sm:col-span-2 flex justify-center mt-10">
// 							<button
// 								type="submit"
// 								className="text-lg px-2 py-1 text-white
//                     bg-accent rounded-sm cursor-pointer font-worksans">
// 								Submit
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</form>
// 		</div>
// 	);
// }

// export default Contact;


import React, {useState} from "react";
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Example() {
	const baseUrl = import.meta.env.VITE_BASE_URL;
	const [name,setName] = useState("");
	const [email,setEmail] = useState("");
	const [message, setMessage] = useState("");

	const getCSRFToken = () => {
        let csrfToken = null;
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            if (cookie.trim().startsWith('csrftoken=')) {
                csrfToken = cookie.split('=')[1];
            }
        });
        return csrfToken;
    };

	const handleFormSubmit = (e) => {
		e.preventDefault();
		fetch(`${baseUrl}/contact/contacts`,{
			method: "POST",
			headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken() 
            },
			body: JSON.stringify({name,email,message})
		})
		.then(res=>console.log(res))
		.catch((err)=>console.log(err));
		setName("");
		setEmail("");
		setMessage("");
	}
  return (
    <div className="relative bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-background" />
      </div>
      <div className="relative max-w-7xl md:max-w-[80vw] mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-background py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
		  <h2 className="text-3xl md:text-5xl font-inter font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
 					Contact Us
 				</h2>
            <p className="mt-3 text-sm md:text-lg leading-6">
			Reach out for queries, support, or suggestions. We're here to help!
            </p>
            <dl className="mt-8 text-base">
              <div>
                <dt className="sr-only text-sm md:text-lg">Postal address</dt>
                <dd className="text-sm md:text-lg">
                  <p>Directorate of Philately, India Post</p>
                  <p>Room No 108-A, Dak Bhawan</p>
                  <p>New Delhi, 110001</p>
                </dd>
              </div>
              <div className="mt-6 text-sm md:text-lg">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  <span className="ml-3">+91 (011) 2304 4994</span>
                </dd>
              </div>
              <div className="mt-3 text-sm md:text-lg">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  <span className="ml-3">directorphilately@indiapost.gov.in</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-background py-8 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6" onSubmit={(e)=>handleFormSubmit(e)}>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full shadow-sm px-2 py-1 md:py-3 md:px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Name"
				  value={name}
				  onChange={(e)=>setName(e.target.value)}
				  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm px-2 py-1 md:py-3 md:px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Email"
				  value={email}
				  onChange={(e)=>setEmail(e.target.value)}
				  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm px-2 py-1 md:py-3 md:px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  placeholder="Message"
                  value={message}
				  onChange={(e)=>setMessage(e.target.value)}
				  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center px-2 py-1 md:py-3 md:px-6 border border-transparent shadow-sm text-white font-medium rounded-md bg-accent hover:backdrop-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
