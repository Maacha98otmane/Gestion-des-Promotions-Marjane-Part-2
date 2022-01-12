$.ajax({
    url: "http://localhost:3030/auth/generaladmin/getallcentre",
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
                                <td>` + data.data[i].name + `</td>                   
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
    let creation = await AdminG.addcenter(formlg.name.value)
    if (creation.msg) {
        location.reload();
    } else {
        console.log("error")
    }
})
const logout = document.getElementById('logout')
window.addEventListener('DOMContentLoaded', () => {
    logout.addEventListener('click', async (e) => {
        document.cookie = "AdminG=dd;expires=Thu, 01 Jan 1970 00:00:00 UTC",
            location.replace('/view/admin-general/Login-admin-general.html')
    })
})