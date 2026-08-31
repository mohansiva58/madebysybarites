import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="relative bg-[#fcfcfc] overflow-hidden border-t border-gray-100">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span 
          className="w-full text-center text-[clamp(4.5rem,19vw,19rem)] font-bold leading-none tracking-[-0.08em] text-black/[0.03] whitespace-nowrap"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Sybarites
        </span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-start pt-6">
            <Link href="/" className="inline-block mb-6 relative z-20">
              <img
                src="/works/madebysybariteslogo.png"
                alt="madebysybarites"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] text-gray-500 leading-relaxed max-w-[280px]">
              Strategic web design, and campaigns<br/>tailored to drive result and conversions.
            </p>
          </div>

          {/* Company Column (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-semibold text-black mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {["Services", "Our Work", "Achievements", "FAQs", "Brand", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[14px] text-gray-500 hover:text-black transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-semibold text-black mb-6">
              Socials
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Email", href: "mailto:hello@madebysybarites.tech" },
                { name: "Instagram", href: "https://www.instagram.com/sybarites.tech/" },
                { name: "LinkedIn", href: "https://www.linkedin.com/company/madebysybarites/" }
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] text-gray-500 hover:text-black transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {social.name}
                    <span className="text-[16px] leading-none mb-0.5">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column (Span 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-[15px] font-semibold text-black mb-6">
              Newsletter
            </h4>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-6 max-w-[320px]">
              Stay ahead with design & marketing<br/>tips and strategies that drive results.
            </p>
            
            <form className="flex max-w-[320px] flex-col items-stretch gap-3 sm:flex-row sm:items-center" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <input 
                  type="email" 
                  placeholder="@ Email" 
                  className="w-full bg-gray-100 border-none rounded-lg px-4 py-3.5 text-[14px] text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-shadow"
                />
              </div>
              <button 
                type="submit"
                className="rounded-lg bg-white px-4 py-3.5 text-[14px] font-semibold text-black shadow-sm transition-opacity hover:opacity-80 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-6 border-t border-gray-100">
          <div className="flex flex-col gap-2 text-[13px] text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>©2025 sybarites.tech All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
