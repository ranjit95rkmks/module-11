import * as fs from 'node:fs'
import { NextResponse } from 'next/server'
export default async function getData( ){

  fs.readFile("@/public/data.json", 'utf-8', (err, data)=>{
    if(err){
      NextResponse.json({error:"Iternal server Errror"})
    }
    else{
      NextResponse.json(data);
    }
  })
   
}
