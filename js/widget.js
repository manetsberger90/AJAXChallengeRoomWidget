var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }

};
 xhr.open('GET', '../data/employees.json');
xhr.send();

var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if(xhr2.readyState === 4 && xhr2.status === 200) {
    var roomStatus = JSON.parse(xhr2.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<roomStatus.length; i += 1) {
      if (roomStatus[i].available === true) {
        statusHTML += '<li class="full">';
      } else {
        statusHTML += '<li class="empty">';
      }
      statusHTML += roomStatus[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
xhr2.open('GET', '../data/rooms.json');
xhr2.send();
