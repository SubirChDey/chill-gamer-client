
import React from "react";

const NewsLetter = () => {

    return (
        <div className="max-w-10/12 w-[1300px] mx-auto mt-6">
            <section className="w-full rounded-xl p-[20px]">
                <div
                    className="flex lg:flex-row flex-col items-center justify-between gap-[50px] lg:gap-[20px]">
                    <div className="w-full sm:w-[80%] lg:w-[50%]">
                        <img src="https://i.ibb.co/vPgN7fq/dizzy-messages-1.png" alt="image"
                            className="w-full" />
                    </div>

                    <div className="w-full lg:w-[50%]">
                        <h1 className="text-[2rem] sm:text-[3rem] font-[500] capitalize text-text leading-[50px]">Join Us!</h1>
                        <p className="text-[1.1rem] mt-3">Subscribe to our weekly newsletter and join us on a journey of personal growth, self-discovery, and love.</p>

                        <form className=" mt-12 relative">
                            <input placeholder="Email Address"
                                className="w-full py-4 pl-4 pr-[120px] outline-none focus:ring-0 border rounded-full border-[#00b0ff]" />

                            <button
                                className="px-8 py-3 absolute top-0 right-0 h-full rounded-full rounded-tl-[0px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsLetter;