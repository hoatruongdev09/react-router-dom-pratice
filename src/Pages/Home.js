import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <div>
            Home page
        </div>
    )
}

export default Home
