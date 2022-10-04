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
// TODO Create Resume
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
