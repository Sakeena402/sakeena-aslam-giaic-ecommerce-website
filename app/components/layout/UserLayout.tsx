'use client';
import React, { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../Sidebar';
import MenuBarMobile from '../MenuBarMobile';

interface LayoutProps {
  pageTitle?: string;
  children: ReactNode;
}

const UserLayout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  // State to ensure client-side rendering
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures the content is only rendered on the client
  }, []);

  // Concatenate page title (if exists) to site title
  let titleConcat = 'Islamic Donation System';
  if (pageTitle) titleConcat = `${pageTitle} | ${titleConcat}`;

  // Mobile sidebar visibility state
  const [showSidebar, setShowSidebar] = useState(false);

  if (!isClient) {
    return null; // Avoid rendering on the server side
  }

  return (
    <>
      <Head>
        <title>{titleConcat}</title>
      </Head>
      <div className="min-h-screen">
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          
          <div className="flex flex-1">
            <MenuBarMobile setter={setShowSidebar} />
            <Sidebar show={showSidebar} setter={setShowSidebar} />
            <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
              {children}
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="text-center">
              <p>&copy; 2024 Islamic Donation System. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
