import Link from "next/link";
import React from "react";
import { checkUser } from "@/lib/checkUser";

export default async function Footer() {
  await checkUser();
  return (
    <div className="footer">
      <p>&copy; 2025 All Rights Reserved.</p>
      <div className="footer__links">
        {["About", "Contact", "Terms", "Privacy Policy"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(" ", "-")}`}
            className="footer__link"
            scroll={false}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
