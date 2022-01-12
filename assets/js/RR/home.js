$.ajax({
    url: "http://localhost:3030/auth/responsablerayon/getpromo",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"

    },
    method: "GET",
    success: function (data) {
        console.log(data.succes)
        var selectid = document.getElementById('id')
        var tablebody = document.getElementById('tablebody')
        if (data.succes == false) {
            tablebody.innerHTML = `
                <tr>
                                    <td colspan="7">Nothing </td>                    
                                   </tr>
    
                `
        } else {
            for (var i in data.data) {
                selectid.innerHTML += `
      <option value="` + data.data[i].id + `">` + data.data[i].name + `</option>
                `
                tablebody.innerHTML += `
                <tr>
                                    <td>` + data.data[i].id + `</td>
                                    <td>` + data.data[i].name + `</td>
                                    <td>` + data.data[i].prix + `</td>
                                    <td>` + data.data[i].quantite + `</td>
                                    <td>` + data.data[i].porcentage + `%</td>
                                    <td>` + data.data[i].point_fidelite + ` Points</td>                    
                                    <td>` + data.data[i].status + `</td>                    
                                   </tr>
    
                `
            }

        }


    },
    error: function (data) {
        console.log(data);
    }
});
import RR from "../classes/Rayon.js";
const formlg = document.getElementById('formlg')
formlg.addEventListener('submit', async (e) => {
    e.preventDefault();
    let creation = await RR.updatepromo(formlg.id.value, formlg.Status.value, formlg.Comment.value)
    if (creation.msg) {
        location.reload();
    } else {
        console.log("error")
    }
})
const logout = document.getElementById('logout')
window.addEventListener('DOMContentLoaded', () => {
    logout.addEventListener('click', async (e) => {
        document.cookie = "RR=dd;expires=Thu, 01 Jan 1970 00:00:00 UTC",
            location.replace('/view/rayon/Login-rayon.html')
    })
})