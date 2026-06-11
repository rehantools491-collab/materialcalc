import Link from 'next/link';

import { SITE, CALCULATOR_TOOLS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-navy pt-12 pb-6">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">MaterialCalc</Link>
            <p className="text-sm text-white/60 mt-2 leading-relaxed">Free construction calculators for every project. Accurate, instant, and built for real builders.</p>
            <div className="flex gap-2.5 mt-4">
              {(['Facebook', 'Instagram', 'LinkedIn'] as const).map((s) => (
                <a key={s} href={SITE.social[s.toLowerCase() as keyof typeof SITE.social]} aria-label={s} rel="noopener noreferrer" target="_blank"
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 text-xs font-semibold hover:bg-white/20 hover:text-white transition-colors">
                  {s.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Calculators</h4>
            {CALCULATOR_TOOLS.map((t) => (
              <Link key={t.slug} href={t.slug} className="block text-sm text-white/60 mb-1.5 hover:text-white transition-colors">{t.name.replace('Concrete ', '')}</Link>
            ))}
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Company</h4>
            <Link href="/about/" className="block text-sm text-white/60 mb-1.5 hover:text-white transition-colors">About</Link>
            <Link href="/contact/" className="block text-sm text-white/60 mb-1.5 hover:text-white transition-colors">Contact</Link>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Legal</h4>
            <Link href="/privacy-policy/" className="block text-sm text-white/60 mb-1.5 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service/" className="block text-sm text-white/60 mb-1.5 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} TheMaterialCalc.com. All rights reserved.</span>
          <span>We don&apos;t store your calculations or personal data.</span>
        </div>
      </div>
    </footer>
  );
}
