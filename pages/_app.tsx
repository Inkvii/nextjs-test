import "public/tailwind.css"

import type {AppProps} from 'next/app'
import Header from "component/Header"
import Menu from "component/Menu"

function MyApp({Component, pageProps}: AppProps) {
  return (
    <div className={"grid grid-template-content"}>
      <Header className={"col-span-2 row-start-1"}/>
      <Menu className={"row-start-2 min-h-screen"}/>
      <div className={"row-start-2 m-4"}>
        <Component {...pageProps} />
      </div>

      <div className={"bg-blue-600 row-start-3 col-span-2 py-2 text-white flex justify-center"}>Footer</div>
    </div>
  )
}

export default MyApp
