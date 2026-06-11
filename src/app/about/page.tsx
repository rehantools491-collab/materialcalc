import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { SITE, CALCULATOR_TOOLS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About MaterialCalc — Free Construction Calculators by Rehan Ilahi',
  description:
    'MaterialCalc is a free construction calculator platform founded by Rehan Ilahi. Learn about our mission, calculator methodology, formula verification process, and why homeowners, DIYers, and contractors trust our tools for concrete estimation.',
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About MaterialCalc — Our Mission, Methodology, and Team',
    description:
      'MaterialCalc provides free, verified construction calculators. Founded by Rehan Ilahi — learn how our tools are built, tested, and maintained.',
    url: '/about/',
  },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo-icon.svg`,
    email: SITE.email,
    description: SITE.description,
    founder: {
      '@type': 'Person',
      name: 'Rehan Ilahi',
      jobTitle: 'Founder & Developer',
      description:
        'SEO specialist and web developer with 15 years of experience building websites, online tools, and content-driven platforms.',
    },
    sameAs: Object.values(SITE.social),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rehan Ilahi',
    jobTitle: 'Founder of MaterialCalc',
    knowsAbout: [
      'Search Engine Optimization',
      'Web Development',
      'Construction Calculators',
      'Technical SEO',
    ],
    description:
      'Rehan Ilahi is the founder of MaterialCalc. He has 15 years of experience in SEO and website development, specializing in building useful web-based tools and content platforms.',
    worksFor: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About MaterialCalc',
    url: `${SITE.url}/about/`,
    description:
      'Learn about MaterialCalc, our founder Rehan Ilahi, how our construction calculators are researched, built, and verified, and our commitment to accuracy and transparency.',
    mainEntity: { '@type': 'Organization', name: SITE.name },
  },
];

const METHODOLOGY = [
  {
    title: 'Research Industry-Standard Formulas',
    desc: 'Every calculator starts with the same math that construction professionals use daily. For concrete, that means the rectangular volume formula (Length × Width × Depth), the cylindrical formula (π × r² × h), and standard conversions between cubic feet, cubic yards, and cubic meters. We research these from published construction manuals, manufacturer documentation, and established building references — not from other calculator websites.',
  },
  {
    title: 'Cross-Reference Against Manufacturer Data',
    desc: 'Bag yields are sourced directly from manufacturer specifications: 0.30 cubic feet for a 40 lb bag, 0.45 for 60 lb, and 0.60 for 80 lb. Recommended slab thicknesses follow residential construction standards (4 inches for patios, 5–6 inches for driveways, 6 inches for garage floors). Every data point has a verifiable source.',
  },
  {
    title: 'Build and Test Each Calculator',
    desc: 'After implementing the formulas, we test each calculator against hand-calculated results using known project dimensions. For example, a 10×10 ft slab at 4 inches thick must return exactly 1.23 cubic yards. We verify dozens of test cases across different dimensions, shapes, and unit systems before any calculator goes live.',
  },
  {
    title: 'Add Practical Features',
    desc: 'A calculator that only outputs a number is not enough. We add adjustable waste factors (5%, 10%, 15%), project-type presets that auto-fill recommended dimensions, Imperial and Metric unit support, copy-to-clipboard functionality, and contextual links between related calculators so users can move from volume to cost to bag count without starting over.',
  },
  {
    title: 'Review and Update Regularly',
    desc: 'Construction material pricing changes with market conditions. We review price references and bag yield data quarterly. When users report issues or suggest improvements through our contact page, we investigate and update promptly. Every calculator page shows the formulas used so anyone can verify the math independently.',
  },
];

const TRUST_CARDS = [
  {
    icon: '✓',
    bg: 'bg-[#ECFDF5] text-success',
    title: 'Verified Formulas',
    desc: 'Every calculation uses standard construction math cross-referenced against published manufacturer specs and building references.',
  },
  {
    icon: '🔍',
    bg: 'bg-[#E6F1FB] text-info',
    title: 'Transparent Methodology',
    desc: 'We display the formula on every calculator page. You can verify any result by hand using the same math we use. Nothing is hidden.',
  },
  {
    icon: '⚡',
    bg: 'bg-orange-light text-orange',
    title: 'No Commercial Bias',
    desc: 'MaterialCalc does not sell concrete, contractor services, or building products. Our calculators have no financial incentive to recommend one supplier over another.',
  },
  {
    icon: '🔒',
    bg: 'bg-[#EEEDFE] text-[#534AB7]',
    title: 'Your Privacy Protected',
    desc: 'All calculations run entirely in your browser. We never collect, transmit, or store your project dimensions, costs, or personal data.',
  },
  {
    icon: '📐',
    bg: 'bg-[#E8EDF4] text-navy',
    title: 'Honest About Limitations',
    desc: 'We clearly explain what our calculators can and cannot do. We recommend verifying results with a local professional on every single page.',
  },
  {
    icon: '🔄',
    bg: 'bg-[#FBEAF0] text-[#D4537E]',
    title: 'Actively Maintained',
    desc: 'This is not an abandoned project. Pricing data is reviewed quarterly, user-reported bugs are fixed promptly, and new calculators are in development.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <Breadcrumb items={[{ label: 'About' }]} />

      {/* Hero */}
      <section className="bg-white pt-12 pb-8 text-center">
        <div className="container-main">
          <h1 className="heading-1 mb-3">About MaterialCalc</h1>
          <p className="text-lg text-gray-400 max-w-[620px] mx-auto leading-relaxed">
            Free, accurate construction calculators that help homeowners, DIYers,
            and contractors estimate material quantities and project costs —
            no signups, no paywalls, no guesswork.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white pb-8">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[700px] mx-auto bg-gray-50 rounded-xl py-4">
            {[
              { n: '5', l: 'Free Calculators' },
              { n: '15+', l: 'Years in Digital Experience' },
              { n: '0', l: 'Signups Required' },
              { n: '100%', l: 'Free to Use' },
            ].map((s) => (
              <div key={s.l} className="text-center py-2">
                <div className="text-3xl font-bold text-orange">{s.n}</div>
                <div className="text-[13px] font-medium text-gray-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-content mx-auto px-6">
          <h2 className="heading-2 mb-4">Our Mission</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            MaterialCalc exists because calculating construction materials should be
            simple. If you are planning a concrete patio, estimating the cost of a
            driveway pour, or figuring out how many bags to pick up from the hardware
            store, you deserve a tool that gives you a clear answer in seconds — without
            requiring a signup, a subscription, or a degree in mathematics.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            We noticed that most construction calculators online fall into two categories.
            Some are too basic — they compute volume but ignore waste factors, unit
            conversions, and cost estimation. Others bury useful tools behind account
            walls, pop-up ads, and confusing interfaces that make a 30-second task take
            five minutes.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            MaterialCalc is our attempt to build something better. Every calculator is
            free, loads instantly, and includes the practical features that actually matter
            on a real project: adjustable waste factors, project-type presets with
            recommended thicknesses, side-by-side bag comparisons, and cost breakdowns
            that separate materials from delivery and labor. We built the tools we wanted
            to find but could not.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6">
          <h2 className="heading-2 mb-6">Meet the Founder</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start bg-white border border-gray-100 rounded-2xl p-6 md:p-7 shadow-calc">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white text-3xl font-bold shrink-0 border-[3px] border-orange mx-auto md:mx-0">
              RI
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-navy mb-0.5 text-center md:text-left">
                Rehan Ilahi
              </h3>
              <p className="text-sm font-semibold text-orange mb-4 text-center md:text-left">
                Founder &amp; Developer, MaterialCalc
              </p>
              <div className="text-[15px] text-gray-600 leading-relaxed space-y-3">
                <p>
                  I&apos;m Rehan Ilahi, and I built MaterialCalc. I have been working in
                  SEO and website development for over 15 years, building websites, online
                  tools, and content platforms designed to rank well on search engines and
                  genuinely help the people who use them.
                </p>
                <p>
                  My background is in SEO, web development, and building online tools.
                  MaterialCalc calculators are based on industry-standard formulas,
                  manufacturer specifications, and published construction references.
                </p>
                <p>
                  The idea for MaterialCalc came from a simple observation: people
                  searching for &ldquo;how much concrete do I need&rdquo; deserve a
                  fast, accurate answer from a clean tool — not a wall of ads with a
                  basic calculator hidden at the bottom. I applied my SEO experience to
                  understand what questions real people are asking, and my development
                  skills to build tools that answer those questions properly.
                </p>
                <p>
                  I do not claim that these calculators replace professional advice.
                  Construction projects involve real-world variables — uneven ground,
                  local building codes, soil conditions — that no online tool can fully
                  account for. That is why every calculator page on MaterialCalc
                  includes a recommendation to verify results with your local contractor,
                  engineer, or supplier before ordering materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-content mx-auto px-6">
          <h2 className="heading-2 mb-2">How Our Calculators Are Built</h2>
          <p className="text-base text-gray-400 mb-6">
            Every MaterialCalc tool goes through a five-step process before it goes
            live. Here is exactly how we research, build, and verify each calculator.
          </p>
          <div className="divide-y divide-gray-100">
            {METHODOLOGY.map((step, i) => (
              <div key={i} className="flex gap-4 items-start py-5">
                <div className="w-10 h-10 rounded-[10px] bg-orange-light text-orange flex items-center justify-center text-base font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy */}
      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6">
          <h2 className="heading-2 mb-4">Accuracy and Limitations</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            The formulas behind MaterialCalc are not proprietary or experimental. They
            are the same volume and conversion formulas that contractors, ready-mix
            plants, and building supply stores use every day. The math itself is
            straightforward and well-established. What MaterialCalc adds is a clean
            interface, practical features, and results that are easy to understand
            and act on.
          </p>
          <h3 className="heading-3 mb-2">Where Our Calculators Perform Well</h3>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Our tools are highly accurate for computing concrete volume from standard
            rectangular and cylindrical dimensions, converting between Imperial and
            Metric units, estimating the number of bags needed based on
            manufacturer-published yields, and generating cost estimates when users
            enter their own local pricing. For standard shapes on properly prepared
            sites, the volume calculations are mathematically exact.
          </p>
          <h3 className="heading-3 mb-2">
            What No Online Calculator Can Fully Account For
          </h3>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Real construction projects introduce variables that go beyond simple
            geometry: uneven or sloping ground, soil that absorbs moisture from wet
            concrete, forms that leak or shift, variations in concrete slump and air
            content, regional differences in material specifications, and structural
            requirements that vary by local building code. Our calculators provide
            estimates — strong starting points for planning and budgeting — but they
            are not a replacement for on-site measurement by a qualified professional.
          </p>
          <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-5 mt-6">
            <p className="text-sm font-semibold text-[#92400E] mb-1.5 flex items-center gap-1.5">
              ⚠ Always Verify Before Ordering
            </p>
            <p className="text-sm text-[#78350F] leading-relaxed">
              We recommend verifying MaterialCalc results with your local ready-mix
              supplier, a licensed contractor, or your building department before
              purchasing materials. Our calculators are designed for planning and
              budgeting purposes. For permit-required or structural work, always consult
              a licensed professional engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-content mx-auto px-6">
          <h2 className="heading-2 mb-2">Why Trust MaterialCalc</h2>
          <p className="text-base text-gray-400 mb-6">
            We earn trust through transparency, verified formulas, and an honest
            acknowledgment of what our tools can and cannot do.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRUST_CARDS.map((c) => (
              <div
                key={c.title}
                className="bg-white border border-gray-100 rounded-xl p-5 hover:border-orange transition-colors"
              >
                <div
                  className={`w-11 h-11 rounded-[10px] flex items-center justify-center text-[22px] mb-3 ${c.bg}`}
                >
                  {c.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-navy mb-1">
                  {c.title}
                </h3>
                <p className="text-[13px] text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="bg-white section-padding">
        <div className="max-w-content mx-auto px-6">
          <h2 className="heading-2 mb-2">Our Calculators</h2>
          <p className="text-base text-gray-400 mb-6">
            MaterialCalc currently offers five free concrete calculators. Each one is
            designed for a specific use case so you get the most relevant inputs,
            outputs, and guidance for your project type.
          </p>
          <div className="space-y-2">
            {CALCULATOR_TOOLS.map((t) => (
              <Link
                key={t.slug}
                href={t.slug}
                className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:border-orange hover:bg-[#FFFBF5] transition-colors"
              >
                <span className="text-sm font-semibold text-orange">{t.name}</span>
                <span className="text-xs text-gray-400">— {t.shortDesc}</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4">
            MaterialCalc is actively expanding with additional concrete,
            construction, material estimation, and cost calculation tools.
          </p>
        </div>
      </section>

      {/* Who Uses */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-content mx-auto px-6">
          <h2 className="heading-2 mb-4">Who Uses MaterialCalc</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            <strong className="text-navy">Homeowners</strong> use MaterialCalc to
            estimate materials before starting a project or contacting a contractor.
            Getting an approximate volume and cost upfront helps with budgeting,
            comparing contractor quotes, and avoiding the common problem of
            over-ordering or running short at the ready-mix plant.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            <strong className="text-navy">DIY enthusiasts</strong> rely on our
            calculators when planning weekend projects — patios, sidewalks, fence
            posts, mailbox bases, and shed foundations. The{' '}
            <Link
              href="/concrete-bags-calculator/"
              className="text-orange hover:underline"
            >
              bags calculator
            </Link>{' '}
            is especially popular for smaller jobs where bagged concrete from the
            hardware store is more practical than ordering a delivery truck.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            <strong className="text-navy">Contractors and builders</strong> use
            MaterialCalc as a quick-reference tool when preparing estimates or talking
            with clients on-site. While professionals rely on their own detailed systems
            for final numbers, a fast volume or cost check saves time during initial
            project scoping.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            <strong className="text-navy">Students and educators</strong> find the
            step-by-step formulas and worked examples on each calculator page useful
            for learning and teaching basic construction mathematics.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white section-padding text-center">
        <div className="max-w-content mx-auto px-6">
          <h2 className="heading-2 mb-2">Get in Touch</h2>
          <p className="text-base text-gray-400 mb-6 max-w-[500px] mx-auto">
            Have a calculator suggestion, noticed a bug, or want to discuss a
            partnership? We welcome feedback that helps us improve.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-[1.5px] border-gray-100 rounded-lg text-sm font-medium text-gray-600 hover:border-orange hover:text-orange hover:bg-orange-light transition-colors"
            >
              ✉ Contact Form
            </Link>
            
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 border-[1.5px] border-gray-100 rounded-lg text-sm font-medium text-gray-600 hover:border-orange hover:text-orange hover:bg-orange-light transition-colors"
            >
              📧 {SITE.email}
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We typically respond within 24–48 business hours. You can also review
            our{' '}
            <Link href="/privacy-policy/" className="text-orange hover:underline">
              privacy policy
            </Link>{' '}
            and{' '}
            <Link href="/terms-of-service/" className="text-orange hover:underline">
              terms of service
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 text-center">
        <div className="container-main">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Start Calculating
          </h2>
          <p className="text-base text-white/70 mb-6 max-w-md mx-auto">
            Choose a calculator and get accurate results in seconds. Free, instant,
            no signup required.
          </p>
          <Link href="/" className="btn-cta">
            Open Concrete Calculator
          </Link>
        </div>
      </section>
    </>
  );
}
