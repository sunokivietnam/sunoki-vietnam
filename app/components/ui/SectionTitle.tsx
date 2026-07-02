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
    <div className="mx-auto mb-20 max-w-3xl text-center">
      {subtitle && (
        <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.4em] text-[#B8895A]">
          {subtitle}
        </p>
      )}

      <h2 className="text-[34px] font-bold leading-tight text-[#2B2520] md:text-[44px] lg:text-[56px]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#555555] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}