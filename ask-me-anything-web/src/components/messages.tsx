import { useParams } from "react-router-dom"
import { Message } from "./message"
import { getRoomMessages } from "../http/get-room-messages"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useMessagesWebSockets } from "../hooks/use-messages-websockets"

export const Messages = () => {
  const { roomId } = useParams()

  if(!roomId) {
    throw new Error('Messages component must be used within room page!')
  }
  
  const { data } = useSuspenseQuery({
    queryFn: () => getRoomMessages({ roomId }),
    queryKey: ['messages', roomId]
  })

  useMessagesWebSockets({ roomId })

  const sortedMessages = data.messages.sort((a,b)=> b.amountOfReactions - a.amountOfReactions)

  return (
    <ul className="list-decimal list-outside px-3 space-y-8">
      {sortedMessages.map(({
        id, 
        text, 
        amountOfReactions, 
        answered
      }) => {
        return (
          <Message 
            key={id} 
            id={id} 
            text={text} amountOfReactions={amountOfReactions} answered={answered}
          />
        )
      })}
    </ul>
  )
}