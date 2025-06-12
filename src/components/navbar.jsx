import Image from "next/image";
import {CircleUserRound, Search} from 'lucide-react'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator } from "./ui/dropdown-menu";
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
             <div className="search_feature flex items-center gap-2 bg-white px-[6px] py-[4px] border-2 border-gray-300 rounded-full">
                <div className="hover:bg-gray-200 transition-colors duration-200 delay-100 px-3 py-1 rounded-full cursor-pointer">
                    Location
                </div>
                <div className="bg-gray-400 h-[20px] w-[0.7px]"></div>
                <div className="hover:bg-gray-200 transition-colors duration-200 delay-100 px-3 py-1 rounded-full cursor-pointer">
                    Date
                </div>
                <div className="bg-gray-400 h-[20px] w-[0.7px]"></div>
                <div className="hover:bg-gray-200 transition-colors duration-200 delay-100 px-3 py-1 rounded-full cursor-pointer">
                    Details
                </div>
                <div className="bg-slate-400 text-white p-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 delay-100">
                    <Search />
                </div>
            </div>
            <div className="">
                <UserComponent />
            </div>
        </div>
    );
}

const UserComponent = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <CircleUserRound className="text-slate-800" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>My Bookings</DropdownMenuItem>
                <DropdownMenuItem>My Favorites</DropdownMenuItem>
                <DropdownMenuItem>My Properties</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Travorra your home</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}