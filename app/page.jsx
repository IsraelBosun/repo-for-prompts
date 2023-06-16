import Feed from "../components/Feed"

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover, Share & Save {" "}
            <br className="max-md:hidden *" />
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
        PrompVault is a secure, centralized platform for storing and sharing AI prompts, promoting collaboration among users.
        </p>
        <Feed />
        <div className="font-bold my-5">Made By <a href="https://testing-eight-lyart.vercel.app/" target="_blank" rel="noopener noreferrer"  className="orange_gradient">IsraelBosun </a> with Nextjs and MongoDB</div>
    </section>
  )
}

export default Home