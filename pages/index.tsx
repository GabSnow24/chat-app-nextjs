import { Button } from '@material-ui/core';
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>A & G</title>
        <link rel="icon" href="/heart.ico.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="lg:text-6xl text-3xl  font-bold">
          Bem vindo(a) ao Chat A&G
        </h1>

        <p className="mt-3 lg:text-2xl text-xl text-left">
          Aqui no chat você só pode ser duas pessoas: Adryelle ou Gabriel.
        </p>
        <p className="mt-3 lg:text-2xl text-xl">
          Escolha um!
        </p>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div className="flex gap-x-2">
            <Button variant="contained" size="large" color="error" href="/chat/adryelle">
              Adryelle
            </Button>
            <Button variant="contained"  size="large" href="/chat/gabriel">
              Gabriel
            </Button>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/GabSnow24"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/gqlogo.png" alt="Gabriel Queiroz" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

export default Home;