export default class RR {

    static loginRR = async (email, password) => {
        try {
            let loginFields = {
                email: email,
                password: password
            }
            let loginRes = await axios.post("http://localhost:3030/auth/responsablerayon/login", loginFields);
            let loginDetails = await loginRes.data;
            return loginDetails;
        } catch (e) {
            console.error(e);
        }

    }
    static updatepromo = async (id, Status, Comment) => {
        try {
            let updateFields = {
                status: Status,
                commentaire: Comment
            }
            let updateRes = await axios.post("http://localhost:3030/auth/responsablerayon/update/" + id, updateFields);
            let updateDetails = await updateRes.data;
            return updateDetails;
        } catch (e) {
            console.error(e);
        }

    }

}