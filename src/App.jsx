import { useState } from "react"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import { ModeToggle } from "./components/mode-toggle"
import { Button } from "./components/myComponents/button"
import { ThemeProvider } from "./providers/theme-provider"

function App() {

  const [view, setView] = useState("signin")

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" my-container flex w-full min-h-[100vh] py-5 items-center justify-center">
        {view === "signin" ? <SignIn onSwitch={() => setView("signup")}/> : <SignUp onSwitch={() => setView("signin")}/>}
        <div className=" absolute top-5 right-5">
          <ModeToggle />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
