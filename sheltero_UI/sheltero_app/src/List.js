import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

class TrData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.jobs.map((job, i) => {
                return (
                    <tr key={job.jobID} className="text-center">
                        <td>{job.jobID}</td>
                        <td>{job.jobTitle}</td>
                        <td>{job.salary}</td>
                        <td>{job.credit_level}</td>
                        <td>{job.jobTag}</td>
                        <td>{job.contact}</td>
                        <td>{job.jobArea}</td>
                        <td>{job.companyID}</td>
                        <td>{job.jobImg}</td>
                        <td>{job.jobDetail}</td>
                    </tr>
                )
            })
        )
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        const _this = this;
        axios.get('https://5ebe69c3ec800c00160438fc.mockapi.io/api/job')
            .then(function (response) {
                _this.setState({
                    jobs: response.data,
                    isLoaded: true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })


    }

    render() {
        if (!this.state.isLoaded) {
            return <div>Loading</div>
        } else {
            return (
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Title</th>
                        <th className="text-center">Salary</th>
                        <th className="text-center">credit_level</th>
                        <th className="text-center">Tag</th>
                        <th className="text-center">contact</th>
                        <th className="text-center">jobArea</th>
                        <th className="text-center">companyID</th>
                        <th className="text-center">jobImg</th>
                        <th className="text-center">jobDetails</th>
                    </tr>
                    </thead>
                    <tbody>
                    <TrData jobs={this.state.jobs}/>
                    </tbody>
                </table>
            )
        }
    }
}

export default List;