$.ajax({
    url: "http://localhost:3030/auth/generaladmin/getallcentre",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    },
    method: "GET",
    success: function (data) {
        var selectcentre = document.getElementById('selectcentre')
        console.log(data.data)
        for (var i in data.data) {
            selectcentre.innerHTML += `
  <option value="` + data.data[i].id + `">` + data.data[i].name + `</option>
            `
        }

    },
    error: function (data) {
        console.log(data);
    }
});
$.ajax({
    url: "http://localhost:3030/auth/generaladmin/getalladminuser",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"

    },
    method: "GET",
    success: function (data) {
        var tablebody = document.getElementById('tablebody')
        for (var i in data.data) {
            tablebody.innerHTML += `
            <tr>
                                <td>` + data.data[i].nom + `</td>
                                <td>` + data.data[i].prenom + `</td>
                                <td>` + data.data[i].email + `</td>
                                <td>` + data.data[i].name + `</td>
                                <td>` + data.data[i].status + `</td>                    
                                <td> <a class="edit" title="Edit"><i class="fa fa-pen"></i></a>
                                <a class="dlt" title="Delete" id="` + data.data[i].id + `"><i class="fa fa-trash"></i></a></td>                    
                            </tr>

            `
        }

    },
    error: function (data) {
        console.log(data);
    }
});
import AdminG from "../classes/AdminGeneral.js";
const formlg = document.getElementById('formlg')
formlg.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(formlg.selectcentre.value)
    let creation = await AdminG.addadmincenter(formlg.name.value, formlg.prenom.value, formlg.email.value,
        formlg.password.value, formlg.passwordconfirm.value, formlg.selectcentre.value)
    if (creation.msg) {
        location.reload();
    } else {
        console.log("error")
    }
})
const deluser = document.getElementsByClassName('dlt')
deluser.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log(deluser.id)
    // let creation = await AdminG.addadmincenter(formlg.name.value, formlg.prenom.value, formlg.email.value,
    //     formlg.password.value, formlg.passwordconfirm.value, formlg.selectcentre.value)
    // if (creation.msg) {
    //     console.log("success")
    // } else {
    //     console.log("error")
    // }
})