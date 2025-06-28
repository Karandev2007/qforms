import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-3xl">
          <p className="text-lg mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Collect</h2>
            <p className="mb-4">
              When you avail of our form system, you put some of your personal information at trust and here is what we collect generally:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your name and email address</li>
              <li>Anything you submit through our forms</li>
              <li>General usage data and how you interact with our site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use It</h2>
            <p className="mb-4">
              We use the info you share with us to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and improve our services</li>
              <li>Handle and analyze the forms you submit</li>
              <li>Make your experience better over time</li>
              <li>Keep you informed with important updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Keeping Your Data Safe</h2>
            <p>
              What you have to know about privacy is very vital to us: we are serious about security. 
              Our industry measures an encrypted and secure storage mode for your data.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}