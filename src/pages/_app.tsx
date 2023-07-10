import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Containers from '../../components/Containers/Containers'

export default function App({ Component, pageProps }: AppProps) {
    return(
        <Containers>
            <Component {...pageProps} />
        </Containers>
    )
        
}
