type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
