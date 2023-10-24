import React from 'react'
import { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

const HomePage = () => {

  

  const [avo, setAvo] = useState<TProduct[]>([])

  useEffect(()=>{

    window.fetch('/api/avo')
    .then((response) => response.json())
    .then(({data})=>{
      setAvo(data)
    })

  })

  return (

    <Layout>
      <KawaiiHeader />
      <ProductList products={avo} />
    </Layout>
    
    // <div>

    //   <div>Platzi and Next.js!</div>

    //   {/* {avo.map((product)=>(

    //     <div>
    //       <img src={product.image} alt="" />
    //       <h2>{product.name}</h2>
    //     </div>
        
    //   ))} */}

    // </div>
  )
}

export default HomePage
