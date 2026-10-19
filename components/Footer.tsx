"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <a href="#" className="footer-brand">
            <span className="brand-mark">BZ</span>
            <strong>HUZAIFA BIN ZAHEER</strong>
          </a>

          <p>
            Designing, developing and editing
            digital experiences with purpose.
          </p>

          <a className="footer-top" href="#">
            Back to top <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} BIN
            ZAHEER. All rights reserved.
          </span>
          <span>
            Design · Development · Video
          </span>
        </div>
      </div>
    </footer>
  );
}
