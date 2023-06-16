import "../styles/globals.css"
import Nav from "@/components/Nav"
import Provider from "@/components/Provider"
import image from "../public/assets/images/padlock.png"

export const metadata = {
    title: "PromptVault",
    description: "Store and Share AI Prompts",
    image: {image}
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <Provider>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout