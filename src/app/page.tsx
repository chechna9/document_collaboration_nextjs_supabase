"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row justify-center space-10 h-screen">
      <motion.div 
       animate={{opacity:1 }}
       initial={{ opacity: 0}}
       transition={{ delay: 0.1 }}
       viewport={{ once: false}}
      className="flex-1 flex items-center justify-center">
       <div className="bg-myColor2 rounded-[20%] w-fit h-fit">
        <motion.img 
        animate={{ x: 20,y:-20, opacity:1 }}
        initial={{ x:0 , y:0, opacity: 0}}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
        className="translate-x-5 -translate-y-5 sm:w-[25vw] w-[40vw]" src="/images/logo_generated_1.svg" alt=""/>
      </div> 
      </motion.div>
      
      <motion.div
       animate={{ x: 0, opacity:1 }}
       initial={{ x:+500 , opacity: 0}}
       transition={{ delay: 0.2 }}
       viewport={{ once: true, amount: 0 }}
      className="bg-myColor2 flex-1 sm:rounded-tr-[0%] rounded-t-[30%] sm:rounded-l-[30%] flex flex-col justify-center items-center space-y-10">
        <div className="text-left">
          <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-white font-bold">With ColabNote</h1>
          <p className="text-[1rem] md:text-[1.5rem] text-white font-medium">Two heads better Than one </p>
        </div>
        <div className="scale-110 md:scale-150 space-x-6">
        <Link href={"/login"}>
          <Button >Login</Button>
        </Link>
        <Link href={"/signup"}>
          <Button  variant="outline">Signup</Button>
        </Link>
        </div>
        
      </motion.div>
    </div>
  );
}
