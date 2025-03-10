import { Typewriter } from "react-simple-typewriter"

const FAQ = () => {
    return (
        <div className="w-10/11 max-w-[1300px] mx-auto">            
            <div className='text-center m-10'>
                <h3 className='mb-4'>
                    {" "}
                    <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-4xl'>
                        <Typewriter
                            words={["Frequently Ask Questions"]}
                            loop={Infinity}
                            cursor
                            cursorStyle="-"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h3>
                <p className='text-center'>Got Questions? We've Got Answers! Explore Our Gaming FAQ for All the Details!" 🎮🔥</p>
            </div>
            <div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold text-xl">How do you review games?</div>
                    <div className="collapse-content text-lg">We review games based on gameplay, graphics, story, replayability, and overall experience. Our team plays each game and provides honest, unbiased opinions.</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold  text-xl">Do you cover all gaming platforms?</div>
                    <div className="collapse-content text-lg">Yes! We review games across multiple platforms, including PC, PlayStation, Xbox, Nintendo Switch, and mobile (iOS & Android).</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold  text-xl">Can I request a game review?</div>
                    <div className="collapse-content text-lg">Absolutely! If there's a game you'd like us to review, feel free to contact us or leave a suggestion in the comments section.</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold  text-xl">Do you give spoiler-free reviews?</div>
                    <div className="collapse-content text-lg">Yes, we try to keep our reviews spoiler-free. If there are any spoilers, we provide clear warnings beforehand.</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-xl">How often do you publish new reviews?</div>
                    <div className="collapse-content text-lg">We update our website regularly with the latest game reviews, industry news, and gaming trends. Check back often for new content!</div>
                </div>
            </div>
        </div>
    )
}

export default FAQ