import {NextResponse} from "next/server";
import { isContext } from "vm";

export async function GET( request : Request, context : any){
    const {params} = context;

    return NextResponse.json({"param" : params.generoId});
}