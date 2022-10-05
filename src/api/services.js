import axios from "./axios";

// TODO Login
export const login = async (email, password) => {
    try {
        const response = await axios.post('/auth/login', {
            email,
            password
        }, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            console.log(response);
            return response
        }).catch((response) => {
            return response
        })

        return response;

    } catch (error) {
        console.log(error)
        return error;
    }

}
// TODO Register
export const register = async (userType, name, email, password, location, website, linkedIn, twitter, instagram, about) => {
    const response = await axios.post('auth/signup', {
        "name": name,
        "email": email,
        "password": password,
        "user_type": userType,
        "location": location,
        "website": website,
        "about": about,
        "linked_in": linkedIn,
        "twitter": twitter,
        "instagram": instagram,
    }, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        console.log(response);
        return response
    }).catch((response) => {
        return response
    })

    return response

}
// TODO Get User
export const getUser = async (token) => {
    try {
        const response = await axios.get('/auth/user', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response);
            return response
        }).catch((response) => {
            return response
        })


        return response;

    } catch (error) {
        console.log(error)
        return error;
    }
}
// TODO Create Job
export const createJob = async (title, description, rate, location, jobType, workspace, responsibilities, requirements) => {
    try {
        const response = await axios.post('/jobs', {
            // "title": "Software Developer",
            // "description": "Create Software dfjofj jofjfjdefjwifjwle fiwjeofjewkfjsdfaerngeikn niuergiueraluaeriugaruhegih irgugarjrjudfhuvsjisdfijsd",
            // "rate": "$12k/month",
            // "location": "Mampong",
            // "job_type": "part-time",
            // "workspace": "1",
            // "responsibilities": ["Do something1", "Do something2", "Do something3"],
            // "requirements": ["Do something1", "Do something2", "Do something3"],
            "title": title,
            "description": description,
            "rate": rate,
            "location": location,
            "job_type": jobType,
            "workspace": workspace,
            "responsibilities": responsibilities,
            "requirements": requirements
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then((response) => {
            console.log(response);
            return response
        }).catch((response) => {
            return response
        })

        return response
    } catch (error) {
        console.log(error)
        return error;
    }
}
// TODO Create Resume

// TODO Get All Jobs
export const getAllJobs = async () => {
    try {
        const response = await axios.get('/jobs', {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            console.log(response);
            return response
        }).catch((response) => {
            return response
        })

        return response;

    } catch (error) {
        console.log(error)
        return error;
    }
}

// TODO Get Job
export const getJob = async (token, id) => {
    try {
        const response = await axios.get(`/jobs/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response);
            return response
        }).catch((response) => {
            return response
        })


        return response;

    } catch (error) {
        console.log(error)
        return error;
    }
}

// TODO Get recruiters Jobs
export const getRecruiterJobs = async (token) => {
    try {
        const response = await axios.get('/company/jobs', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response);
            return response
        }).catch((response) => {
            return response
        })


        return response;

    } catch (error) {
        console.log(error)
        return error;
    }
}

// TODO Logout
export const logout = async (token) => {
    try {
        const response = await axios.get('/auth/logout', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response);
            return response
        }).catch((response) => {
            return response
        })


        return response;

    } catch (error) {
        console.log(error)
        return error;
    }
}
