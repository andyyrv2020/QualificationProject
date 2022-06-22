import moment from 'moment';
import uuid from 'uuid';

const BASE_URL = 'https://qualificationservice-f742.restdb.io/rest/data';

const API_KEY = '082faf8f0c1525617b33fdb86e5a261cbf15c';

export function getQualification() {
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


export function addQualification({ title, date, description }) {
    return fetch(BASE_URL,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            },
            body: JSON.stringify({
                title, date, description, id: uuid()
            })
        })
        .then(result => result.json())
        .catch(error => console.error(error));
}

export function editQualification({ id, title, date, description }) {
    return fetch(`${BASE_URL}/${id}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            },
            body: JSON.stringify({
                title, date, description
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