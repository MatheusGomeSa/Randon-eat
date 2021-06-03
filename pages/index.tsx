import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {
  interface Itens{
    name:String,
    quantidade:Number,
    id: Number
  }
  interface Receitas{
    name:String,
    ingredientes:[string]
    quantidade:[number],
    linkTo:string  }

  const [pages,Setpages ] = useState(1);

    function haveonlist(L:[Itens],r:Receitas){
      let list = [];
      let ing = r.ingredientes;
      let have = false
      for(let h of L ) { list.push(h.name)}
      
      for(let i=0;i<=ing.length; ){
        for(let l=0;l<=list.length; l++){
          if(ing[i] === list[l]){
            ing.shift();
            list = list.slice(l);
            have = true
          }
        }
        if(!have)
        {
          return;
        }
        have = false;
      }
      return r
    }


    const Lista = [
      {name:'Açucar',
       quantidade:1,
        id:12232},
        {
          name:'Arroz',
          quantidade:2,
          id:23352
        }
      ]
      
    const receitas = [
      {name:'Biscoito-casadinho',
      ingredientes:['margarina','ovo','farinha de trigo','amido de milho','açúcar'],
      quantidade:['150g','2','2 xícaras','1 xícara','1 xícara e 1/2',],
      linkTo:'https://www.tudogostoso.com.br/receita/65455-biscoito-casadinho.html'
    },
    {name:'Biscoito-de-maizena',
      ingredientes:['maizena','margarina','ovo','açucar'],
      quantidade:['200g','100g','1','4 colheres de sopa'],
      linkTo:'https://www.tudogostoso.com.br/receita/51310-biscoito-de-maizena.html'
    }
    ]
     return (
    <div>
      <Head>
        <title>Eat List</title>
        <meta name="description" content="app to build a list of recipes basead on yours provisions" />
      </Head>
      <nav className='flex bg-primary justify-around w-full h-12'>
        <button onClick={()=> Setpages(1) }>lista de items</button>
        <button onClick={()=> Setpages(2) }>Receitas possiveis</button>
        <button onClick={()=> Setpages(3) }>Perfil</button>
      </nav>
      <main className={styles.main}>
        {(pages == 1) &&( 
          <div>
              <div>Opções (adicionar itens, organizar por n, ...)</div>
              <section>{Lista.map(use => <div className='flex justify-between'><div >{use.name}</div><div>{use.quantidade}</div></div>)}</section>
          </div>
        )}
        {(pages == 2) &&(
          <div>
            <section className='grid grid-cols-2 lg:grid-cols-4 gap-4'><div className='col-span-2 lg:col-span-4'>Café da Manhã</div>
              {receitas.map(use => <div className='h-44 w-48 border border-black bg-primary'><div className='h-1/3 w-full border border-black bg-secundary'>{use.name}</div><div></div></div>)}
            </section>

            <section className='grid grid-cols-2 lg:grid-cols-4 gap-4'><div className='col-span-2 lg:col-span-4'>Almoço</div>
            {receitas.map(use => <div className='h-44 w-48 border border-black bg-primary'><div className='h-1/3 w-full border border-black bg-secundary'>{use.name}</div><div></div></div>)}
            </section>
            <section className='grid grid-cols-2 lg:grid-cols-4 gap-4'><div className='col-span-2 lg:col-span-4'>Café da tarde</div>
            {receitas.map(use => <div className='h-44 w-48 border border-black bg-primary'><div className='h-1/3 w-full border border-black bg-secundary'>{use.name}</div><div></div></div>)}
            </section >
            <section className='grid grid-cols-2 lg:grid-cols-4 gap-4'><div className='col-span-2 lg:col-span-4'>Jantar</div>
            {receitas.map(use => <div className='h-44 w-48 border border-black bg-primary'><div className='h-1/3 w-full border border-black bg-secundary'>{use.name}</div><div></div></div>)}
            </section>
          
          </div>
        )}{(pages == 3) && (
          <div>
              <div>Lista de opções</div>
          </div>
        )} 
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
