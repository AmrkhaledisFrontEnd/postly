import Image from "next/image";
import Link from "next/link";
// =============================================================
function Head() {
  return (
    <Link href={"/feed"} className="px-5 border-b border-b-gray-100 py-3 block">
      <Image
        src={"/logo.png"}
        width={100}
        height={100}
        className="sm:w-40 sm:h-8 w-35 h-7"
        alt="logo"
      />
    </Link>
  );
}

export default Head;
