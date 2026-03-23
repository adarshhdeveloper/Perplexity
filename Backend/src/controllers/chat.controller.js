import chatModel from "../models/chat.model.js"
import messageModel from "../models/message.model.js"
import {generateResponse,genarateChatTitle} from "../services/ai.service.js"

export async function sendMessage(req, res) {

    const {message, chat:chatId} = req.body

    // chat history maintain karke ka logic 
    //follow UP feature ke liye agar pahale se hi chat ho rakhi hii to fir se new chat ans title  na genarate ho 
    let title = null , chat = null ; 
    if (!chatId) {
         title = await genarateChatTitle(message)
         chat = await chatModel.create({
            user: req.user.id,
            title
        })
    }

    const userMessage = await messageModel.create({
        chat: chatId || chat._id,
        content: message,
        role: "user"
    })

    const messages = await messageModel.find({chat:chatId || chat._id})

    const result = await generateResponse(messages)

    const aimessage = await messageModel.create({
        chat: chatId ||chat._id,
        content: result,
        role: "ai"
    })
    res.status(201).json({
        title,
        chat,
        userMessage,
        aimessage
    })
}

export async function getChats(req,res) {
    const user = req.user 
    const chats = await chatModel.find({user : user.id})
    
    res.status(200).json({
        messages : 'Chats fetched Successfully',
        chats 
    })
}

export async function getMessages(req,res) {
    const {chatId} = req.params;

    const chat = await chatModel.find({
        _id: chatId,
        user : req.user.id
    })

    if(!chat){
        return res.status(404).json({
            message : "Chat not found"
        }
        )
    }

    const messages = await messageModel.find({
        chat : chatId
    })

    res.status(200).json({
        message : "Message retrive successfully",
        messages
    })
}

export async function deleteChat(req,res) {
    const {chatId} = req.params;

    const chat = await chatModel.findOneAndDelete({
        _id: chatId,
        user : req.user.id
    })

        if(!chat){
            return res.status(404).json({
                message : "Chat not found"
            })
        }

        await messageModel.deleteMany({
            chat : chatId
        })

    res.status(200).json({
        message : "Chat deleted successfully",
    })
}