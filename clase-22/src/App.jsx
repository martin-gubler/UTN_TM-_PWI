import React from 'react'
import Button from './Components/Button'
import Layout from './Components/Layout'
import CodePointInfo from './Components/CodePointInfo'
import { RowInfo } from './Components/RowInfo'
import ColorsContainer from './Components/ColorsContainer/ColorsContainer'


function App() {
const cartas_colores = [
  {
    color: ['#219C19', '#FFF455', '#FFC700', 'EE4E4E'],
    likes: 886,
    time: '2 weeks'
  },
  {
    color: ['#FFF5E1', '#FF6969', '#C80036', '#OC1844'],
    likes: 1550,
    time: '2 weeks'
  },
  {
    color: ['#102C57', '#1679AB', '#FFB1B1', '#FFCBCB'],
    likes: 1396,
    time: '2 weeks'
  },
  {
    color: ['#059212', '#06D001', '#9BEC00', '#F3FF90'],
    likes: 1001,
    time: '2 weeks'
  }

]

return (
  <>
  <ColorsContainer cartas_colores={cartas_colores}/>
  </>
)
}

export default App









  /* la callback se ejecuta por cada elemento del array, y se le pasara dicho elemento por parametro
  lo que retorne la callback va a ser el elemento nuevo agregado al array resultante 
  MAP: retorna el array
  
  */
  /*  const result = nombres.map((nombre) => {
    return 'div>' + nombre + '</div>'
  })
  console.log(result) */
  /* 
  [
  '<div>pepe</div>',
  '<div>juan</div>',
  '<div>diego</div>',
  '<div>maria</div>'
  ]
/*   
  const nombres = ['pepe', 'juan', 'diego', 'maria']
  const listaJSXNombres = nombres.map((nombre) => {
    return <div>{nombre}</div>
  })
*/

/*   const litaJSXNombres = [
    <div>Pepe</div>,
    <div>Juan</div>,
    <div>Maria</div>
  ] */
/*   return (
    <div>
      <h2>Nombres</h2>
      {listaJSXNombres}
    </div>
  ) 
}
*/

/* 


<div>
<RowInfo title='Icon Font'>
<p>Using the web font? Copy, paste, and go.</p>
</RowInfo>
<RowInfo title='Code point'>
<span>Unicode:U+F61F</span>
<br></br>
<span>CSS:\F61F</span>
<br></br>
<span>JS:\uF61F</span>
<br></br>
<span>HTML:&#xF61F</span>
</RowInfo>
<RowInfo title='Copy HTML'>
<p>Paste the SVG right into your project's code.</p>
<code>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-sidebar" viewBox="0 0 16 16">
<path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z"/>
</svg>
</code>
</RowInfo>
</div>

const ContactScreen = () => {
  return(
    <Layout>
      <h2>Esta es la pagina de contacto</h2>
      <form>

      </form>
      <Button>Click Icono</Button>
    </Layout>
  )
}

const ProductsScreen = () => {
  return(
    <Layout>
      <h2>Esta es la pagina de producto</h2>
      <h3>Este es el subtitulo</h3>
      <Button>Click Icono</Button>
    </Layout>
  )
}

<CodePointInfo>
  <span>Unicode:U+F61F</span>
  <br></br>
  <span>CSS:\F61F</span>
  <br></br>
  <span>JS:\uF61F</span>
  <br></br>
  <span>HTML:&#xF61F</span>
</CodePointInfo> */


