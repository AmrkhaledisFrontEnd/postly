import Link from "next/link";
// =================================================================
function AuthFooter({
  questionText,
  linkText,
  href
}: {
  questionText: string;
  linkText: string;
  href:string
}) {
  return (
    <div className="bg-[#F7F7F7] flex flex-col items-center py-4 gap-3 ">
      <button className="text-[#6B6B7C] flex items-center font-normal text-[13px] gap-1">
        {questionText}
        <Link
          className="text-[#494a55] font-semibold hover:underline hover:text-[#5e5f6a]"
          href={href}
        >
          {linkText}
        </Link>
      </button>
      <div className="border-t border-t-gray-200 opacity-50 w-full flex justify-center items-center gap-1 pt-3 text-xs ">
        <span className="font-medium text-[#29272b]"> Secured by</span>
        <Link
          className="text-[#4A33F6] font-bold uppercase"
          href="https://amr-khaled-site.netlify.app/"
          target="_blank"
        >
          Amr Khaled
        </Link>
      </div>
    </div>
  );
}

export default AuthFooter;
