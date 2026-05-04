"use client"

import { useState } from "react"

export default function MessageScreen() {
    const [opened, setOpened] = useState(false)

    return (
        <div className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4 my-10">
            <div
                className="text-center">
                <h2
                    className="text-2xl md:text-3xl font-semibold text-primary text-center"
                >
                    A Special Message
                </h2>

                <p className="text-primary/70 text-sm">
                    Tap to open
                </p>
            </div>

            <div
                onClick={() => setOpened(!opened)}
                className={`card  relative h-71.25 w-full rounded-[40px] overflow-hidden shadow-inner cursor-pointer transition-all bg-linear-to-b from-white/80 to-pink-200 flex items-center justify-center max-w-71.25`}
            >
                <div className={`cover ${opened ? "opacity-0" : "opacity-100"} pointer-events-none z-10 bg-[#ffedea]!`} />

                <div className="relative px-6 h-56 overflow-y-auto text-foreground">
                    Happy First Anniversary, Cutiepie ❤️
Aaj ka din hum dono ke liye bohot special hai. Shayad hum kabhi mile nahi, par jo connection aur pyaar hum share karte hain na, woh kisi distance se kam nahi hota. Tumhari baatein, tumhari care, aur tumhara hona hi meri life ko itna special bana deta hai.
Long distance easy nahi hota, par tumhare saath sab kuch worth it lagta hai. Har call, har message, aur har chhoti si baat mere liye bohot important hai. Tum meri life ka woh part ho jo mujhe hamesha smile karne ki wajah deta hai.
I wish ki jaldi woh din aaye jab hum finally mil sakein, bina screen ke, real mein… aur tab tak, main bas yahi chahta hoon ki hum aise hi ek dusre ke saath strong bane rahein.
Thank you for loving me itna deeply, itna honestly. Tum sach mein one of a kind ho. ❤️
Happy 1st Anniversary, jaan. Hamesha aise hi mere saath rehna. 💗 and last I love you meri pyaari si biwi 💞
                </div>
            </div>
        </div>
    )
}
