import React from 'react';

const navers = [
    {
        id: "c461fd47-6650-4a39-bbe4-3035d6a3312a",
        name: "Mario Pereira",
        admission_date: "2010-05-28T00:00:00.000Z",
        job_role: "FullStack developer",
        user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
        project: "Twitter, Uber",
        birthdate: "1986-02-08T00:00:00.000Z",
        url: "https://www.w3schools.com/w3images/avatar3.png"
    },
    {
        id: "c89762d5-2f7c-4202-b8ae-e4171085b55f",
        name: "Maria Clara",
        admission_date: "2009-01-27T00:00:00.000Z",
        job_role: "Front-end developer",
        user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
        project: "Facebook, WhatsApp e instagram",
        birthdate: "1986-02-02T00:00:00.000Z",
        url: "https://www.w3schools.com/w3images/avatar5.png"
    },
    {
        id: "bd4623ee-5564-4b0e-bd1d-1de4451e32e9",
        name: "Cristiano Souza",
        admission_date: "2012-06-20T00:00:00.000Z",
        job_role: "Lider técnico",
        user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
        project: "Apple",
        birthdate: "1983-05-19T00:00:00.000Z",
        url: "https://www.w3schools.com/w3images/avatar2.png"
    },
    {
        id: "74d13f68-47d0-426d-9421-2e45f18a5ad4",
        name: "Carlos Pereira",
        admission_date: "2000-09-03T00:00:00.000Z",
        job_role: "Lider técnico",
        user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
        project: "Samsung, Mozila",
        birthdate: "1978-03-20T00:00:00.000Z",
        url: "https://www.w3schools.com/w3images/avatar1.png"
    },
    {
        id: "24c7c920-dbc4-4ca8-8c8e-e9218ecc7ed6",
        name: "Christian Tavares",
        admission_date: "2018-08-19T00:00:00.000Z",
        job_role: "Desenvolvedor",
        user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
        project: "Project Backend Test",
        birthdate: "1992-04-12T00:00:00.000Z",
        url: "test-path/image-test.png"
    },
    {
        id: "c27335f7-7b25-400e-8d24-79a4cc025e08",
        name: "Christian Tavares",
        admission_date: "2018-08-19T00:00:00.000Z",
        job_role: "Desenvolvedor",
        user_id: "ea44a85f-3e6b-4443-9f66-1d974c498900",
        project: "Project Backend Test",
        birthdate: "1992-04-12T00:00:00.000Z",
        url: "test-path/image-test.png"
    }
]
var cardsContainer = document.getElementById("cards_container");

class App extends Comment{
    render(){
        let element;    
        navers.forEach(naver => {
            element += (<div class="card">
                <img class="profile_pic" src={naver.url}/>
                <p class="name">{naver.name}</p>
                <p class="job">{naver.job_role}</p>
                <img class="delete" src="../imagens/delete.png"/>
                <img class="edit" src="../imagens/edit.png"/>
            </div>)
        });
        return element;
    };
}

export default App;