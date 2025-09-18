
import type { KeyboardEvent } from "react"
import { useRef, useState } from "react"
import axios from "axios"

import TypingIndicator from "./TypingIndicator"
import ChatMessages from "./ChatMessages"
import type { Message } from "./ChatMessages"
import ChatInput from "./ChatInput"
import type { ChatFormData } from "./ChatInput"

type ChatResponse = {
    message: string
}

const ChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const [isBotTyping, setIsBotTyping] = useState(false)
    const [error, setError] = useState('')

    const conversationId = useRef(crypto.randomUUID())

    const onSubmit = async ({ prompt }: ChatFormData) => {
        try {
            setMessages((prev) => [...prev, { content: prompt, role: 'user' }])
            setIsBotTyping(true)
            setError('')
            console.log(prompt)

            const { data } = await axios.post<ChatResponse>('/api/chat', { prompt, conversationId: conversationId.current })
            console.log(data)
            setMessages((prev) => [...prev, { content: data.message, role: 'bot' }])
        } catch (e) {
            console.error(e)
            setError('Something went wrong, Try again!')
        } finally {
            setIsBotTyping(false)
        }
    }







    console.log("messages", messages)
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col flex-1 gap-3 mb-10 overflow-y-auto">
                <ChatMessages messages={messages} />
                {isBotTyping && <TypingIndicator />}
                {error && <p className="text-red-500">{error}</p>}
            </div>
            <ChatInput onSubmit={onSubmit} />
        </div >
    )
}

export default ChatBot