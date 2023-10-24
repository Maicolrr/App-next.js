import type { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'

import CartProvider from '@store/Cart'

// sirve para compartir imformacion de otros componentes y asi usarlos en todas las paginas por ejemplo como lo hace los layouts
function MyApp({ Component, pageProps }: AppProps) {
    
    return(
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    ) 
}

export default MyApp
