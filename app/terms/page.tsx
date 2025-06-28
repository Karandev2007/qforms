import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-3xl">
          <p className="text-lg mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Terms</h2>
            <p className="mb-4">
              By accessing and using QForms, you agree to be bound by these terms and conditions.
              The service is intended for internal use within QeinTech.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to use QForms for creating and managing forms within the organization.
              This license is non-transferable and for internal use only.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Form creation and management</li>
              <li>Response collection and analysis</li>
              <li>Data export and reporting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p>
              The service is provided "as is". We make no warranties about the completeness,
              reliability, and accuracy of this service for any purpose.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}