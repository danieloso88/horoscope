// Diseñar y Desarrollar un aplicación web en React que permita generar
// el Horóscopo de una persona a partir de su fecha de Nacimiento.

import {useState} from 'react';
import './Horoscope.css';

const Horoscope = () => {
    const [date, setDate] = useState('');
    const [horoscope, setHoroscope] = useState('');
    
    const getHoroscope = async () => {
        let sign = getSign();
        let url = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
        let response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json());
        
        console.log("Reponse", response)
        setHoroscope(response.description);
    };

    //obtener signo del horoscopo
    const getSign = () => {
        let newDate = new Date(date);
        let month = newDate.getMonth() + 1;
        let day = newDate.getDate();
        let sign = '';

        if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
            sign = 'acurarius';
        }
        else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            sign = 'pisces';
        }
        else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
            sign = 'aries';
        }
        else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
            sign = 'taurus';
        }
        else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            sign = 'gemini';
        }
        else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
            sign = 'cancer';
        }
        else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
            sign = 'leo';
        }
        else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
            sign = 'virgo';
        }
        else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
            sign = 'libra';
        }
        else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
            sign = 'scorpio';
        }
        else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
            sign = 'sagittarius';
        }
        else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
            sign = 'capricorn';
        }

        return sign;

    }
    
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12">
            <h1 className="text-center">Horoscope</h1>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                type="date"
                className="form-control"
                id="date"
                onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={getHoroscope}>
                Get Horoscope
            </button>
            <p>{horoscope}</p>
            </div>
        </div>
        </div>
    );
}

export default Horoscope;