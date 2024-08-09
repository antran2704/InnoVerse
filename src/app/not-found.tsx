import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center" style={{backgroundImage: 'url("/images/background_404.webp")'}}>
      <div className="w-1/2 flex flex-col gap-5">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium text-center text-white">404</h1>
        <h2 className="lg:text-2xl md:text-xl text-lg font-medium text-center text-white">
          Page Not Found
        </h2>
        <p className="w-1/2 md:text-lg text-base text-center mx-auto text-white">
          Có vẻ liên kết bạn đang truy cập không còn tồn tại
        </p>
        <Link href="/" className="block text-xl font-medium w-fit px-5 py-2 text-white bg-[#fd6829] mx-auto rounded-lg">Return Home</Link>
      </div>
    </div>
  );
}
