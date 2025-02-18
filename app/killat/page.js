import Link from 'next/link'

export default function KiltaList() {
    return (
      <div className='container'>
        <h1>Jäsenkillat</h1>

        <Link href='/killat/algo'>Algo ry</Link>
      </div>
    )
  }