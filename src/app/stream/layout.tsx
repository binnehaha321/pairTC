import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StreamLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="my-9">
			{children}
			<ToastContainer autoClose={3000} pauseOnHover={false} />
		</section>
	);
}
