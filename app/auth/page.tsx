
import axios from "axios";
import React from "react";
import Register from "../components/Register";
import { getServerSession } from "next-auth";
import { options } from "../utils/options";
import { redirect } from "next/navigation";

export default async function Auth(){

    const session=await getServerSession(options);
    if(session)
    {
        redirect("/");
    }
    return(
        <>
            <Register/>
        </>
    )
}
