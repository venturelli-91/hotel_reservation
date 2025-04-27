import React, { ReactNode } from "react";
import Footer from "./Footer";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
