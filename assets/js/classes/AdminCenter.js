export default class AdminC {

    static login = async (email, password) => {
        try {
            let loginFields = {
                email: email,
                password: password
            }
            let loginRes = await axios.post("http://localhost:3030/auth/centreadmin/login", loginFields);
            let loginDetails = await loginRes.data;
            return loginDetails;
        } catch (e) {
            console.error(e);
        }

    }
    static addrayon = async (name, prenom, email, password, passwordconfirm, categoryid) => {
        try {
            let creationFields = {
                name: name,
                prenom: prenom,
                email: email,
                password: password,
                passwordconfirm: passwordconfirm,
                categoryid: categoryid
            }
            let creationRes = await axios.post("http://localhost:3030/auth/generaladmin/creation", creationFields);
            let creationDetails = await creationRes.data;
            return creationDetails;
        } catch (e) {
            console.error(e);
        }

    }
    static deeluser = async (id) => {
        try {
            let creationRes = await axios.post("http://localhost:3030/auth/generaladmin/delete/" + id);
            let creationDetails = await creationRes.data;
            return creationDetails;
        } catch (e) {
            console.error(e);
        }

    }

}