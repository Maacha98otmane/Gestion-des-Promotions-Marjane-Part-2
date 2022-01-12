$.ajax({
    url: "http://localhost:3030/auth/centreadmin/getallproduit",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    },
    method: "GET",
    success: function (data) {
        var selectcentre = document.getElementById('produitid')
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
    url: "http://localhost:3030/auth/generaladmin/getallpromo",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"

    },
    method: "GET",
    success: function (data) {
        console.log(data.data)
        var tablebody = document.getElementById('tablebody')
        for (var i in data.data) {
            tablebody.innerHTML += `
            <tr>
                                <td>` + data.data[i].name + `</td>
                                <td>` + data.data[i].prix + `</td>
                                <td>` + data.data[i].porcentage + `%</td>
                                <td>` + data.data[i].point_fidelite + ` Points</td>                    
                                <td>` + data.data[i].status + `</td>                    
                                <td > <a class="edit" title="Edit"><i class="fa fa-pen"></i></a>
                                <a class="dlt"  data-id="` + data.data[i].id + `" title="Delete"><i class="fa fa-trash"></i></a></td>                    
                            </tr>

            `
        }

    },
    error: function (data) {
        console.log(data);
    }
});
import AdminC from "../classes/AdminCenter.js";
const formlg = document.getElementById('formlg')
formlg.addEventListener('submit', async (e) => {
    e.preventDefault();
    let creation = await AdminC.addpromo(formlg.pourcentage.value, formlg.duree.value, formlg.produitid.value)
    if (creation.msg) {
        location.reload();
    } else {
        console.log("error")
    }
})