let data = [];

// Check if data exists in localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('object');
    if (storedData) {
        data = JSON.parse(storedData);
    }
    readAllData();
});

function saveData() {
    localStorage.setItem('object', JSON.stringify(data));
}

function readAllData() {
    var tableData = document.querySelector('.table-body');
    var elements = "";

    data.forEach(record => {
        elements += `<tr>
      <td>${record.name}</td>
      <td>${record.email}</td>
      <td>
        <button class="update-btn btn" onclick="edit(${record.id})">Update</button>
        <button class="del-btn btn" onclick="del(${record.id})">Delete</button>
      </td>
    </tr>`;
    });

    tableData.innerHTML = elements;
}

function addRow() {
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;

    var newObj = {
        id: data.length + 1,
        name: name,
        email: email
    };

    data.push(newObj);
    saveData();
    readAllData();

    document.querySelector('.name').value = '';
    document.querySelector('.email').value = '';
}

function edit(id) {
    document.querySelector('.update-container').style.display = "block";
    document.querySelector('.input-container').style.display = "none";

    var obj = data.find(rec => rec.id == id);
    document.querySelector('.uname').value = obj.name;
    document.querySelector('.uemail').value = obj.email;
    document.querySelector('.id').value = obj.id;
}

function update() {
    var id = document.querySelector('.id').value;
    var name = document.querySelector('.uname').value;
    var email = document.querySelector('.uemail').value;

    var index = data.findIndex(rec => rec.id == id);
    data[index] = { id, name, email };

    saveData();
    readAllData();

    document.querySelector('.update-container').style.display = "none";
    document.querySelector('.input-container').style.display = "block";
}

function cancel() {
    document.querySelector('.update-container').style.display = "none";
    document.querySelector('.input-container').style.display = "block";
}

function del(id) {
    data = data.filter(rec => rec.id !== id);
    saveData();
    readAllData();
}
