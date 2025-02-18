'use client'

import { useState } from 'react'

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        membershipType: 'jäsenjärjestö'
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Täällä sitten käsitellään lomakkeen lähetys vaikka sihteerin sähköpostiin
        console.log('Lomakkeen tiedot:', formData);
    }

    return (
        <div className='container'>
            <h1>Jäsenyys</h1>
            <h2>Jäsenjärjestöt</h2>
            <p>
                Yhdistyksen jäseniksi voivat liittyä jäsenjärjestöt.
            </p>
            <h2>Henkilöjäsenet</h2>
            <p>
                Henkilöjäsenet voivat olla joko varsinaisia jäseniä tai kannatusjäseniä.
            </p>
            <h2>Liity jäseneksi</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Nimi:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Sähköposti:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='membershipType'>Jäsenyyden tyyppi:</label>
                    <select
                        id='membershipType'
                        name='membershipType'
                        value={formData.membershipType}
                        onChange={handleChange}
                    >
                        <option value='jäsenjärjestö'>Jäsenjärjestö</option>
                        <option value='varsinaiset jäsenet'>Varsinaiset jäsenet</option>
                        <option value='kannatusjäsenet'>Kannatusjäsenet</option>
                    </select>
                </div>
                <button type='submit'>Lähetä</button>
            </form>
        </div>
    )
}