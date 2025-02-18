import { UserProvider } from "./component/ejer1";
import UserProfile from "./component/ejer1.1";
import { CounterProvider } from "./component/ejer2";
import Counter from "./component/ejer2.2";
import { ThemeProvider } from "./component/ejer3";
import ThemeToggle from "./component/ejer3.3";
import Cuadrado from "./component/cuadrado";
import { LanguageProvider } from "./component/ejer4";
import  LanguageSwitcher  from "./component/ejer4.4";

export default function Home() {
  return (
    <>
     <UserProvider>
      <div>
        <UserProfile/>
       </div>
    </UserProvider>

    <br></br>

    <CounterProvider>
      <div>
      <Counter/>
      </div>
    </CounterProvider>

    <br></br>
    <ThemeProvider>
      <Cuadrado/>
      <div>
        <ThemeToggle/>
      </div>
    </ThemeProvider>

    <br></br>
    <LanguageProvider>
      <div>
        <LanguageSwitcher/>
      </div>
    </LanguageProvider>
    </>
  );
}
