import "../styles/blogs/Blog-four.css";
const Four = () => {
    return (
        <div className="blog-four">
            <div className="text-wrapper">
                <h1>Manufacturing the Chassis</h1>
                <p>Now, it's time to get hands-on. We're in the Idealab, drilling holes and cutting plexiglass to make the chassis for our robot. It's noisy and dusty, but it's also a lot of fun. With every piece we put together, our robot starts to take shape.</p>
            </div>
            <div className="images">
                <div className="text-image">
                    <img src="/images/LaserCutter.png" alt="Laser Cutter" />
                    <p>Look at our laser cutting machine, this is where we cut down our plexiglass. </p>
                </div>
                <div className="text-image">
                    <img src="/images/Drill.png" alt="Drill" />
                    <p>And here you can see us drilling holes for our motor holders that we will design later.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Four;