import { Router } from "express";
import { sendMessage , getChats , getMessages ,deleteChat} from "../controllers/chat.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const chatRouter = Router()

/**
 * @desc   Send a message and get a response from the AI model
 * @route  POST /api/chats/message
 * @access Private
 */
chatRouter.post("/message",authUser,sendMessage)

/** * @desc   Get all chats of the authenticated user
 * @route  GET /api/chats/
 * @access Private
 */
chatRouter.get("/",authUser,getChats)

/***
 * @desc   Get all messages of a specific chat
 * @route  GET /api/chats/:chatId/messages
 * @access Private
 */
chatRouter.get("/:chatId/messages",authUser,getMessages)

/***
 * @desc   Delete a specific chat and its messages
 * @route  DELETE /api/chats/delete/:chatId
 * @access Private
 */
chatRouter.delete("/delete/:chatId",authUser,deleteChat)


export default chatRouter