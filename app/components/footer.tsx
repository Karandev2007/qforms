import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between py-4 px-6">
        <div className="flex flex-col items-start">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} QeinTech. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            Made with <Heart className="h-4 w-4 mx-1 fill-red-500 text-red-500" /> by Karan
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
} 