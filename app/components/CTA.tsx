export default function CTA() {
  return (
    <section className="bg-[linear-gradient(135deg,#2B2520_0%,#3A312A_100%)] px-6 py-[100px] md:px-10 md:py-[140px]">
      <style>
        {`
          @keyframes ctaFadeUp {
            from {
              opacity: 0;
              transform: translateY(28px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .cta-reveal {
            opacity: 0;
            animation: ctaFadeUp 900ms ease forwards;
            animation-timeline: view();
            animation-range: entry 10% cover 30%;
          }
        `}
      </style>

      <div className="cta-reveal mx-auto max-w-[720px] text-center">
        <p className="mb-6 text-xs font-semibold tracking-[0.35em] text-[#D8B07A]">
          KOKORO Living
        </p>

        <h2 className="whitespace-pre-line text-4xl font-bold leading-tight tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
          {`理想の空間づくりを、
はじめませんか。`}
        </h2>

        <p className="mx-auto mt-8 max-w-[560px] whitespace-pre-line text-base leading-[2] tracking-[0.04em] text-white/80 md:text-lg">
          {`日本品質の設計・施工で、
住まい・店舗・水まわりまで、
お客様の想いを一つひとつ丁寧に形にします。`}
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[14px] bg-[#B8895A] px-10 py-[18px] text-sm font-semibold tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#A77647] sm:w-auto"
          >
            無料相談する
          </a>

          <a
            href="#works"
            className="inline-flex items-center justify-center rounded-[14px] border border-white/40 bg-transparent px-10 py-[18px] text-sm font-semibold tracking-[0.12em] text-white transition-colors duration-300 hover:bg-white hover:text-[#2B2520] sm:w-auto"
          >
            施工事例を見る
          </a>
        </div>

        <p className="mt-8 text-sm tracking-[0.08em] text-white/60">
          お気軽にお問い合わせください。
        </p>
      </div>
    </section>
  );
}
