export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between py-4 px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} QeinTech. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
} 