import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <section className="bg-brand-950 text-white">
        <div className="container py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">Contact</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight">Connect with a local property specialist.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">We respond quickly to serious buyers, investors and premium sellers. Tell us your search profile and we’ll match you to the right agent.</p>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <SectionHeading title="Send us a brief" subtitle="Get personalised support for buying, viewing or selling property in Spain." />
            <div className="mt-8 space-y-6 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">1</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">Tell us your priorities</h3>
                  <p className="mt-2 text-slate-600">Region, budget, property type and timing help us deliver the best options fast.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">2</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">Book a private consultation</h3>
                  <p className="mt-2 text-slate-600">Arrange a video call or in-person briefing with an expert agent.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">3</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">Receive tailored matches</h3>
                  <p className="mt-2 text-slate-600">We send high-quality listings, including exclusive opportunities not always visible publicly.</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
