import React from "react";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default MainLayout;
