import moment from 'moment';
import uuid from 'uuid';

const BASE_URL = 'https://quisify-e0ab.restdb.io/rest/data';
const API_KEY = '62b33f3347be35714b35fcc7';

export function getQualifications() {
    return fetch(BASE_URL,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            }
        }
    )
        .then(response => response.json())
        .then(qualifications => qualifications.map(item => ({
            ...item,
            date: moment(item.date, "DD/MM/YYYY HH:mm").toDate(),
        })));
}

export function getQualificationById(id) {
    return fetch(`${BASE_URL}/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            }
        }
    )
        .then(response => response.json())
        .then(item => {
            return {
                ...item,
                date: moment(item.date, "DD/MM/YYYY HH:mm").toDate()
            }
        })
        .catch(error => console.error(error));
}


export function addQualification({ names, qname, dates, credits, date }) {
    return fetch(BASE_URL,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            },
            body: JSON.stringify({
                names, qname, dates, credits, date, id: uuid()
            })
        })
        .then(result => result.json())
        .catch(error => console.error(error));
}

export function editQualification({ id, names, qname, dates, credits, date }) {
    return fetch(`${BASE_URL}/${id}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            },
            body: JSON.stringify({
                names, qname, dates, credits, date
            })
        })
        .then(result => result.json())
        .catch(error => console.error(error));
}

export function deleteQualification(id) {
    return fetch(`${BASE_URL}/${id}`,
        {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            }
        })
        .then(result => result.json())
        .catch(error => console.error(error));
}
