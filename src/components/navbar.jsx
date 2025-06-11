import Image from "next/image";
import {CircleUserRound} from 'lucide-react'
export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-5 md:px-16 py-3 bg-muted shadow-sm">
            <div className="flex items-center">
                <div className="relative w-10 h-10">
                    <Image
                        src="/images/travorra_logo.png"
                        alt="Travorra Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <span className="text-slate-800 font-bold text-xl tracking-wide">Travorra</span>
            </div>
            <div className="search_feature">

            </div>
            <div className="">
                <UserComponent />
            </div>
            
        </div>
    );
}

const UserComponent = () => {
    return(
        <CircleUserRound className="text-slate-800"/>
    )
}