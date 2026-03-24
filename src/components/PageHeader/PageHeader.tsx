function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <h1 className="md:text-3xl sm:text-2xl text-xl font-bold mb-2">{title}</h1>
      <p className="text-gray-400 font-semibold md:text-[15px] text-sm">{subtitle}</p>
    </div>
  );
}

export default PageHeader;
