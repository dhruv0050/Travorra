"use client"

import { cn } from "@/lib/utils";
import { categories } from "@/static/config";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CountrySelect from "./country-select";
import { Input } from "./ui/input";
import Counter from "./counter-input";

const STEPS = {
    CATEGORY:0,
    LOCATION:1,
    INFO:2,
    IMAGES:3,
    DESCRIPTION:4,
    PRICE:5
}

export default function BecomeaHostComponent() {
    const [step, setStep] = useState(STEPS.INFO);
    const setCustomValue = (title,value) => {
        setValue(title, value)
    }
    const {
        register,
        handleSubmit,
        setValue,
        watch
    } = useForm({
        defaultValues:{
            category: "",
            roomCount: 1,
            childCount: 0,
            guestCount: 1,
        }
    })
    const category = watch("category");
    const location = watch("location");
    const roomCount = watch("roomCount");
    const childCount = watch("childCount");
    const guestCount = watch("guestCount");

    let sourceAtStep = (
        <div>
            <h1>Which of these categories define your property</h1>
            <p>Pick a category</p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                 {
                categories.map(each=>{
                    return <div className={cn(" flex flex-col p-5 rounded-lg border-gray-300/20 text-semibold cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-in-out",
                    category == each.label?"bg-slate-500 text-white" : "bg-gray-100"
                    )} key={each.label} onClick={()=>setCustomValue("category", each.label)}>
                    <each.icon/>
                    {each.label}
                        </div>
                })
            }
           </div>
        </div>
    )
    if(step == STEPS.LOCATION) {
        sourceAtStep = (
            <div>
                <h1>
                    Where is your property based out of
                </h1>
                <CountrySelect
                    value={location}
                    onChange = {(value) => setCustomValue("location", value)}
                />
            </div>
        )
    }
   else if (step === STEPS.INFO) {
        sourceAtStep = (
            <div className="flex flex-col gap-3">
                <h1 className="text-lg md:text-xl font-semibold text-gray-600">Choose your preferances</h1>
                <div className="flex justify-between">
                    <span>
                        <h3 className="text-lg font-semibold text-gray-600">How many rooms do you want?</h3>
                        <p>Choose a room count</p>
                    </span>
                    <Counter 
                        value={roomCount}
                        onChange={value => setCustomValue("roomCount", value)}
                    />
                </div>
                <div className="w-full h-[0.4px] bg-gray-800 my-10" />
                <div className="flex justify-between">
                    <span>
                        <h3 className="text-lg font-semibold text-gray-600">How many Children do you have?</h3>
                        <p>Choose a children Count</p>
                    </span>
                    <Counter 
                        value={childCount}
                        onChange={value => setCustomValue("childCount", value)}
                    />
                </div>
                <div className="w-full h-[0.4px] bg-gray-800 my-10" />
                <div className="flex justify-between">
                    <span>
                        <h3 className="text-lg font-semibold text-gray-600">How many Adults are planning to join?</h3>
                        <p>Choose a guest count</p>
                    </span>
                    <Counter 
                        value={guestCount}
                        onChange={value => setCustomValue("guestCount", value)}
                    />
                </div>
                
                
            </div>
        )
    } 

    return <div>
        {sourceAtStep}
    </div>
}