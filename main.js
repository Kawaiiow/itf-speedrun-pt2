let idx = 0;
var contacts = [];

$("#display_name").click(function (e) { 
    e.preventDefault();
    window.open("https://github.com/Kawaiiow")
});

$("#username_btn").click(function (e) { 
    e.preventDefault();
    $("#display_name").html($("#input_username").val() + "'s 67070114")
    $("#input_username").val("")
});

$("#url_btn").click(function (e) { 
    e.preventDefault();
    $("#profile-pic").attr("src", $("#input_url").val())
    $("#input_url").val("")
});

$("#add_btn").click(function (e){
    e.preventDefault();
    let name = $("#input_name").val()
    let tel = $("#input_tel").val()
    contacts.push({ name, tel });
    $("#input_name").val("")
    $("#input_tel").val("")
    updateRow();
});

function updateRow(){
    const table = document.getElementById('contact');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    contacts.forEach((contact, index) => {
        const row = table.insertRow(-1);
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = contact.name;
        row.insertCell(2).textContent = contact.tel;
    });
};

$("#ex_csv").click(function (e) { 
    e.preventDefault();
    let csv = 'Name,Phone Number\n';
    contacts.forEach(contact => {
        csv += `${contact.name},${contact.tel}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'contacts.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
