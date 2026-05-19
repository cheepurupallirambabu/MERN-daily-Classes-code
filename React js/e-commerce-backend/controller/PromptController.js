const prompts = require('../model/promptModel')
const { GoogleGenAI } = require('@google/genai')

const sendPrompt = async (req, res) => {
    //try {
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY })
    const responce = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: req.body.prompt,
    })
 
    await prompts.insertOne({ question: req.body.prompt , promptData: responce.text })
    res.status(200).json({ message: "success", AI:responce.text })
    //} catch (error) {
    //   res.status(500).json({message:"faild to generate response",error:error.message})
    //}
}

module.exports = sendPrompt;

