import { ArrowUp } from "lucide-react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { createMessageReaction } from "../http/create-message-reaction"
import { toast } from "sonner"
import { removeMessageReaction } from "../http/remove-message-reaction"

interface MessageProps {
  id: string
  text: string
  amountOfReactions: number
  answered?: boolean
}

export const Message = ({id: messageId, text, amountOfReactions, answered = false}: MessageProps) => {
  const [hasReacted, setHasReacted] = useState(false)

  const { roomId } = useParams()

  if(!roomId) {
    throw new Error('Messages component must be used within room page!')
  }

  const createMessagemReactionAction = async () => {
    if(!roomId) return
    try {
      await createMessageReaction({roomId, messageId})
    } catch (error) {
      toast.error('Falha ao reagir. Tente novamente!')
      console.error(error)
    }
    setHasReacted(true)
  }

  const removeMessagemReactionAction = async () => {
    if(!roomId) return
    try {
      await removeMessageReaction({roomId, messageId})
    } catch (error) {
      toast.error('Falha ao remover reação. Tente novamente!')
      console.error(error)
    }
    setHasReacted(false)
  }
  
  return (
    <li data-answered={answered} className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none">{text}

    {hasReacted ? 
      <button 
      onClick={removeMessagemReactionAction} 
      className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500" 
      type="button">Curtir pergunta({amountOfReactions}) <ArrowUp className="size-4" /></button> 
      : 
      <button 
      onClick={createMessagemReactionAction} 
      className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300" type="button">Curtir pergunta({amountOfReactions}) <ArrowUp className="size-4" /></button>
    }
    </li>
  )
}