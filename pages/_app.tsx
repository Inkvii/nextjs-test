import "public/tailwind.css"

import type {AppProps} from 'next/app'
import Header from "component/Header"
import Menu from "component/Menu"

function MyApp({Component, pageProps}: AppProps) {
  return (
    <div className={"grid grid-template-content"}>
      <Header className={"col-span-2"}/>
      <Menu className={"md:min-h-100 sm:col-span-2 md:col-span-1 md:scroll-snap-x"}/>
      <div className={"m-4 sm:col-span-2 md:col-span-1"}>
        <Component {...pageProps} />
      </div>

      <div className={"bg-blue-600 col-span-2 py-2 text-white flex justify-center"}>Footer</div>
    </div>
  )
}

export default MyApp
