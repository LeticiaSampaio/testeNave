const url = 'https://navedex-api.herokuapp.com/v1/';

var login = {email: "testing-user@nave.rs", password: "nave1234"};
var naver = {
	job_role: "Desenvolvedor",
	admission_date: "19/08/2018",
	birthdate: "12/04/1992",
	project:"Project Backend Test",
	name: "Christian Tavares",
	url: "test-path/image-test.png"
}

var headerPost = new Headers();
headerPost.append('Accept', 'application/json');
headerPost.append('Content-Type', 'application/json');

var headerToken = new Headers();
var token;

var postLogin = { method: 'POST',
    headers: headerPost,
    body: JSON.stringify(login)};

var postCreate = { method: 'POST',
    headers: headerPost,
    body: JSON.stringify(naver)};

// headerToken.append('Authentication', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhNDRhODVmLTNlNmItNDQ0My05ZjY2LTFkOTc0YzQ5ODkwMCIsImVtYWlsIjoidGVzdGluZy11c2VyQG5hdmUucnMiLCJpYXQiOjE2MDAzMDI1NzZ9.PyrIHMLjIm1vNODo50IDm7Vyna-s3zFl_7X_K3GM1b4`);

(async () => {
    const rawResponse = await fetch(url + 'users/login', postLogin);
    const content = await rawResponse.json();
  
    token = content.token;
    console.log(content);

    headerToken.append('Authentication', `Bearer ${token}`);
    let getShow = { method: 'GET', headers: headerToken};

    fetch(url + 'navers', getShow).then(resp => console.log(resp));
})();
// var getShow = { method: 'GET',
//     headers: headerToken};

// (async () => {
//     const rawResponse = await fetch(url + 'navers/' + new URLSearchParams({
//         id: 'ea44a85f-3e6b-4443-9f66-1d974c498900',
//     }), getShow);
//     const content = await rawResponse.json();
//     console.log('h')
//     console.log(content);
// })();

// (async () => {
//     const rawResponse = await fetch(url + 'navers', getShow);
//     const content = await rawResponse.json();
//     console.log('h')
//     console.log(content);
// })();
