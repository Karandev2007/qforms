import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* main hero section */}
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            QForms
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Powerful Custom Form System Build For QeinTech.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link href="/admin">
              <Button size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}