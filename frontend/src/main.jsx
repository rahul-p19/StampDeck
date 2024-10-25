import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Market from "./components/Market";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/market" element={<Market />} />
					<Route path="/contactus" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
