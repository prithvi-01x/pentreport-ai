import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-28 px-6 text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/30">
            AI-Powered Security Reporting
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Generate Pentest Reports in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              60 Seconds
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            AI-powered professional reports for security professionals. Stop spending hours writing — start delivering results.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40"
          >
            Start Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-4 text-sm text-gray-500">No credit card required &middot; 3 free reports/month</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">Three simple steps to a professional pentest report</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Paste Your Raw Findings',
                description: 'Dump your notes, findings, and vulnerability data in any format. Our AI understands messy input.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'AI Generates Professional Report',
                description: 'Gemini AI structures your findings, adds severity ratings, CVSS scores, and executive summaries.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Download Branded PDF',
                description: 'Export a client-ready PDF with your branding, logo, and a professional layout in one click.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-4 p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-blue-600/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 group-hover:bg-blue-600/30 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-gray-800">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-gray-400 text-lg">Start free, scale as you grow</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl border border-gray-800 bg-gray-900">
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Free</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">$0</span>
                  <span className="text-gray-500 mb-1">/month</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">3 reports per month</p>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                {['3 reports/month', 'Standard templates', 'PDF export', 'Email support'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="mt-auto text-center px-5 py-3 rounded-xl border border-gray-700 text-gray-300 font-medium hover:border-gray-500 hover:text-white transition-colors text-sm">
                Get Started Free
              </Link>
            </div>

            {/* Pro */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl border-2 border-blue-600 bg-blue-600/10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 text-xs font-bold text-white bg-blue-600 rounded-full uppercase tracking-wider">Most Popular</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Pro</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">$29</span>
                  <span className="text-gray-400 mb-1">/month</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Unlimited reports</p>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-gray-300">
                {['Unlimited reports', 'All templates', 'Custom branding', 'Priority support', 'CVSS scoring', 'Executive summaries'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="mt-auto text-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors text-sm shadow-lg shadow-blue-600/30">
                Start Pro
              </Link>
            </div>

            {/* Agency */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl border border-gray-800 bg-gray-900">
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Agency</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">$79</span>
                  <span className="text-gray-500 mb-1">/month</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Team + branding</p>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                {['Everything in Pro', 'Up to 10 team members', 'White-label branding', 'API access', 'Dedicated support', 'Custom templates'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="mt-auto text-center px-5 py-3 rounded-xl border border-gray-700 text-gray-300 font-medium hover:border-gray-500 hover:text-white transition-colors text-sm">
                Start Agency
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center">
        <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} PentReport AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
