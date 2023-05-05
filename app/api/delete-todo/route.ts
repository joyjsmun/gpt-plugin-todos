import { NextRequest,NextResponse } from "next/server";
import { Todos } from "../../lib/TodosClass";



export async function POST(req:NextRequest){
    const body = await req.json();
    Todos.deleteTodo(body);
    return NextResponse.json(
        {success: true},
        {
            status:200,
            headers:{
                "Access-Control-Allow-Origin":"https://chat.openai.com",
                "Access-Control-Allow-Methods": "GET, POST,DELETE,PUT,OPTIONS",
                "Access-Control-Allow-Headers":
                "Content-Type, Authorization, openai-ephemeral-user-id,openai-conversation-id",
            }
        }
    )
}


export async function OPTIONS(){
    return NextResponse.json(
        {}
    ),
    {
        status:200,
            headers:{
                "Access-Control-Allow-Origin":"https://chat.openai.com",
                "Access-Control-Allow-Methods": "GET, POST,DELETE,PUT,OPTIONS",
                "Access-Control-Allow-Headers":
                "Content-Type, Authorization, openai-ephemeral-user-id,openai-conversation-id",
            }
    }

}