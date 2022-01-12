$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3030/auth/generaladmin/getallpromo",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"

        },
        method: "GET",
        success: function (data) {
            var tpromo = document.getElementById('totalpromo')
            tpromo.innerHTML = '<span>' + data.data.length + '</span>'
            var dt = data.data
            var Null = [];
            var Valide = [];
            var invalide = [];

            for (var i in dt) {
                if (dt[i].status == "pas encore") {
                    Null.push("Null " + dt[i].status);

                }
                if (dt[i].status == "valide") {
                    Valide.push(dt[i].status);

                }
                if (dt[i].status == "invalide") {
                    invalide.push(dt[i].status);
                }
            }
            var nl = Null.length
            var vl = Valide.length
            var ivl = invalide.length
            const labels = ['Pas Encore', "Valide", "Invalide"];
            const chartdata = {
                labels: labels,
                datasets: [{
                    label: 'Promo',
                    data: [nl, vl, ivl],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                    ],
                    borderWidth: 1
                }]
            };

            var ctx = $("#mycanvas");

            var barGraph = new Chart(ctx, {
                type: 'bar',
                data: chartdata
            });
        },
        error: function (data) {
            console.log(data);
        }
    });
    $.ajax({
        url: "http://localhost:3030/auth/centreadmin/getallrespo",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"

        },
        method: "GET",
        success: function (data) {
            var tpromo = document.getElementById('nbac')
            var tablebody = document.getElementById('tablebody')
            tpromo.innerHTML = '<span>' + data.data.length + '</span>'

            for (var i in data.data) {
                tablebody.innerHTML += `
                <tr>
                                    <td>` + data.data[i].nom + `</td>
                                    <td>` + data.data[i].prenom + `</td>
                                    <td>` + data.data[i].email + `</td>
                                    <td>` + data.data[i].category + `</td>                    
                                </tr>

                `
            }

        },
        error: function (data) {
            console.log(data);
        }
    });
});
const logout = document.getElementById('logout')
window.addEventListener('DOMContentLoaded', () => {
    logout.addEventListener('click', async (e) => {
        document.cookie = "AdminC=dd;expires=Thu, 01 Jan 1970 00:00:00 UTC",
            location.replace('/view/admin-center/Login-admin-center.html')
    })
})