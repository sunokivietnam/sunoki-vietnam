type Props = {
  title: string;
  subtitle?: string;
  description?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-8 md:mb-12 max-w-3xl text-center">
      {subtitle && (
        <p className="mb-3 md:mb-4 text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.35em] text-[#B8895A]">
          {subtitle}
        </p>
      )}

      <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#2B2520] md:text-[42px]">
        {title}
      </h2>

      {description && (
  <p className="mx-auto mt-4 md:mt-6 max-w-[620px] whitespace-pre-line text-[15px] leading-7 text-[#666] md:text-base">
  {description}
</p>
)}
    </div>
  );
}