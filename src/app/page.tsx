"use client"
import { Image } from "antd";
import { AvatarDemo } from "@/components/shared/avatar";
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="max-w-[500px] m-auto  text-white">
            <div className="pt-20 ">
                <div className="bg-lime-800 rounded-lg ">
                    <section className="flex justify-start items-center p-4 gap-2">
                        <AvatarDemo />
                        <p className= "text-base font-semibold">Pash Ventures</p>
                    </section>
                    <section className="flex p-4 gap-2 justify-between items-center">
                        <p>This section contains the product description. Cute pink shoes
                        
                        </p>
                        <div className="max-w-[200px] ">
                            <Image
                                src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
                                alt="Picture of the product"
                                width={100}
                                height={100}
                                preview={false}
                                className="rounded-lg"
                            />
                        </div>
                    </section>
                    <section className="flex justify-between fonrt-semibold p-4"> 
                        <p>TOTAL</p>
                        <p>20 USD</p>
                    </section>

                </div>
               <section className="bg-slate-100 px-3 pb-2">
               <p className="text-base py-2 text-black">Pay with crypto</p>
                <Button className="bg-lime-800 w-full">
                    Pay
                </Button>
               </section>
               <section className="text-black flex items-center justify-end pr-3">
                <p>Powered by </p>
                <Image
                src="/assets/images/nine.png"
                width={50}
                preview={false}
                />
                <section className="font-semibold">
                    <p>Nine</p>
                    <p>Network</p>
                </section>
               </section>

            </div>
        </div>
    );
}
