const BASE_URL = "http://shelteroinf.herokuapp.com";

// using axios to interact with Library API
const axios = require('axios');



/**
 * Retrieves the list of authors from Library API
 * @return List of Objects, each containing author data.
 */
export function getJobs() {
    const endpoint = BASE_URL + `/job-search`;
    console.log("getJobs");
    try{
        return axios.get(endpoint).then(res => res.data);
    } catch (e) {
        return e;
    }

}



/**
 * Retrieves a single job from API using the job ID
 * @param {string} job_id -- uniquely identifies each job
 * @return Single Objects containing author data.
 */
export function  getJob(_id) {
    const endpoint = BASE_URL + `/job/${_id}`;

    try{
        return axios.get(endpoint).then(res => res.data);
    } catch (e) {
        return e;

    }
}


/**
 * Updates the details of an author; changes only the first and last name
 * @param {object} Job {jobID,jobTitle,salary,credit_level,jobDetail,companyID,jobTag,contact,jobArea}
 */
// export function updateJob(job) {
//     const { _id,jobTitle,salary,credit_level,jobTag,contact,jobArea,companyID,jobDetail} = job;
//     const endpoint = BASE_URL + `/job/${_id}`;
//     // check the author id is present
//     if (!_id & jobTitle & jobArea) {
//         alert("must include jobid, title and jobArea");
//         return;
//     }
//     // check that both contain some text
//     if (!companyID || !credit_level) {
//         alert("must include a credit_level or companyID to update");
//         return;
//     }
//
//     console.log({
//         _id,
//         jobTitle,
//         salary,
//         credit_level,
//         jobDetail,
//         companyID,
//         jobTag,
//         contact,
//         jobArea
//     });
//
//
//     console.log("updateJob");
//
//     return axios({
//         url: endpoint,  // send a request to the API
//         method: "POST", // HTTP POST method
//         headers: {
//             "Content-Type": "application/json"
//         },
//         data: JSON.stringify({ // payload -- values to change
//             jobTitle,
//             salary,
//             credit_level,
//             jobDetail,
//             companyID,
//             jobTag,
//             contact,
//             jobArea
//         })
//     })
//
// }
