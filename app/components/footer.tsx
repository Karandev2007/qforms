import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between py-4 px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} QeinTech. All rights reserved.
        </p>
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