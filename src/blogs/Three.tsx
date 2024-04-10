import "../styles/blogs/Blog-three.css";
const Three = () => {
    return (
        <div className="blog">
            <div className="text-wrapper">
                <h1>Deciding On the Electronic Components</h1>
                <p>In our workshop, it's decision time. We're looking at all the electronic bits and bobs we need for our robot. We're comparing specs, checking prices, and trying to figure out what will work best. It's a bit tricky, but with some teamwork and brainstorming, we'll get there. First, we had planned on using Pololu motors with metal gearboxes but we did not know whether we could make them work efficiently as they had various gear ratios so we went on with the easier and simpler way and kept the KISS method in our minds (Keep It Simple, Stupid !),  and it is using 6v 250rpm DC motor with yellow gearbox on it. Same method as the motors, we have decided to use ln298 motor controllers as they are more affordable and do the same job compared to other motor controllers and as a camera we will be using Pi Camera v2
                </p>
            </div>
            <img src="/images/Component.png" alt="HisarCS HQ" />
        </div>
    )
}

export default Three;