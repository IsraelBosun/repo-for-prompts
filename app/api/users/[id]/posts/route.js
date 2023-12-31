// import Prompt from "@/models/prompt";
// import { connectToDB } from "@/utils/database";

// export const GET = async (request) => {
//     try {
//         await connectToDB()

//         const prompts = await Prompt.find({}).populate('creator')

//         return new Response(JSON.stringify(prompts), { status: 200 })
//     } catch (error) {
//         return new Response("Failed to fetch all prompts", { status: 500 })
//     }
// } 



// to fetch prompts of the users in the profile page

import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();


        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator') // because it is a dynamic route

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 