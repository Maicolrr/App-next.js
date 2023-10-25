import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

// se puede modificar el servidor y si se toca algun parametro se vera reflejado en todas las paginas

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
       <Html> {/* el html personalizaado por next */}
        <Head>
          {/* Aquí puedes agregar tus etiquetas meta, enlaces a CSS, etc. */}
        </Head>
        <body className='my-body-class'>
          <Main /> {/* Aquí es donde viene nuestra aplicacion */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// https://platzi.com/new-home/clases/1991-next/30612-extendiendo-el-document/
//4:00