import Image from "next/image";

export default function Navbar() {
    return (
        <div className="flex justify-between py-3 bg-muted">
            <div className="relative w-8 h-8">
                <Image
                    src="/images/travorra_logo.png"
                    alt="Logo"
                    width={36}
                    height={36}
                    className="w-8"
                />
                <span className="text-slate-700">Travorra</span>
            </div>
            <div>
                Options goes here
            </div>
        </div>
    )
}
