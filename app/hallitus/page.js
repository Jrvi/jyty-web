import React from 'react'
import Link from 'next/link'


export default function HallitusList() {
    return (
      <div>
        <h1>Hallitus</h1>
        <p>Istuva hallitus</p>

        <h3>Puheenjohtaja</h3>
        <p>Juho Järvi</p>

        <h3>Varapuheenjohtaja</h3>
        <p>Eemil Hukkanen</p>

        <h3>Rahastonhoitaja</h3>
        <p>Nuutti Rantanen</p>

        <h3>Sihteeri</h3>
        <p>Ilmo Kurki</p>

        <h3>Kiltavastaava</h3>
        <p>Kasper Pelkonen</p>

        <h3>Teekkarikulttuurivastaava</h3>
        <p>Lassi Laitinen</p>

        <h3>Mediavastaava</h3>
        <p>Juho Kallijärvi</p>
        
        <h3>Viestintävastaava</h3>
        <p>Atte Heikkinen</p>

        <h3>Theo :D</h3>
        <p>Theodore Veistos</p>

        <h2>Kaikki hallitukset</h2>
        <ul>
          <li>
            <Link href='/hallitus/2025'>Hallitus 2025</Link>
          </li>
        </ul>
      </div>
    )

  }