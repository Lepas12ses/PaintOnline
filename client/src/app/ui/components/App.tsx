import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "@/pages/Start";
import RoomPage from "@/pages/Room";

const router = createBrowserRouter([
	{ path: "/", element: <StartPage /> },
	{ path: "/:roomId", element: <RoomPage /> },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
