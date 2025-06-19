"use client"

import { categories } from "@/static/config";
import { useState } from "react";
import { useForm } from "react-hook-form";

const STEPS = {
    CATEGORY:0,
    LOCATION:1,
    INFO:2,
    IMAGES:3,
    DESCRIPTION:4,
    PRICE:5
}

export default function BecomeaHostComponent() {
    const [step, setStep] = useState(STEPS.CATEGORY);
    const setCustomValue = (title,value) => {
        setValue(title, value)
    }

    const {
        register,
        handleSubmit,
        setValue,
    } = useForm({
        category: ""
    })
    let sourceAtStep = (
        <div>
            <h1>Which of these categories define your property</h1>
            <p>Pick a category</p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                 {
                categories.map(each=>{
                    return <div className="bg-gray-100 flex flex-col p-5 rounded-lg border-gray-300/20 text-semibold cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-in-out" key={each.label} onClick={()=>setCustomValue("category", each.label)}>
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
            </div>
        )
    }
    else if(step == STEPS.INFO) {
        sourceAtStep = (
            <div>
            </div>
        )
    }

    return <div>
        {sourceAtStep}
    </div>
}