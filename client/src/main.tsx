import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app/ui/styles/index.css";
import App from "./app/ui/components/App";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
