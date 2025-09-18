import React from "react";

const TypingIndicator = () => {
    return (
        <div className="flex gap-1 px-3 py-3 bg-gray-200 self-start rounded-3xl">
            <Dot />
            <Dot className="[animation-delay:0.2s]" />
            <Dot className="[animation-delay:0.4s]" />
        </div>
    )
}

type dotProps = {
    className?: string
}

const Dot = ({ className }: dotProps) => <div className={`w-2 h-2 rounded-full bg-gray-800 animate-pulse ${className}`}></div>

export default TypingIndicator