const BASE_URL = "https://shelteroinf.herokuapp.com";

// using axios to interact with API
const axios = require('axios');

export async function postUsersSignup(data) {
    const endpoint = BASE_URL + '/user/signup';
    console.log("post user sign up");
    const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}


export async function updateUserProfile(data) {
    const endpoint = BASE_URL + '/user/updateUser';
    console.log("update user profile");
    const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}
export async function updateUserState() {
    const url = "https://shelteroinf.herokuapp.com/user";
    try {
        axios
            .get(url, { withCredentials: true, crossdomain: true })
            .then(response => {
                console.log(response.data);
                if (response.data == "no user session") {
                    console.log("change isLogIn state to false");
                    window.sessionStorage.setItem("loggedIn", false);
                } else {
                    console.log("change isLogIn state to true");
                    console.log(response.data);
                    window.sessionStorage.setItem("loggedIn", true);
                }
            })
            .catch(error => {
                console.log(error);
            });
    } catch (e) {
        console.log(e);
    }
}

export function getAllJobs() {
    const endpoint = BASE_URL + `/job-search`;
    console.log("getJobs");
    try{
        return axios.get(endpoint).then(res => {
            if(!res.data){
                return null
            }
            return res.data;
        });
    } catch (e) {
        return e;

    }

}

export function  getJobsByTag(tag) {
    let sanitize_tag= tag.replace(' ', '_').replace('/','').replace(',', '');
    const endpoint = BASE_URL + `/job-search/byTag/${sanitize_tag}`;

    try{
        return axios.get(endpoint).then(res => {
            if(!res.data){
                return null
            }
            return res.data});
    } catch (e) {
        return e;

    }
}

export function  getJobsByArea(area) {
    // let sanitize_area= area.replace(' ', '_').replace('/','').replace(',', '');
    // const endpoint = BASE_URL + `/job-search/byArea/${sanitize_area}`;
    const endpoint = BASE_URL + `/job-search/byArea/` + area;
    console.log(endpoint);

    try{
        return axios.get(endpoint).then(res => {
            if(!res.data){
                return null
            }
            return res.data;
        });
    } catch (e) {
        return e;

    }
}

