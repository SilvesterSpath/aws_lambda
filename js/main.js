const fetchUsers = async () => {
  return (await fetch('/.netlify/functions/getusers')).json();
};

fetchUsers().then((data) => {
  userList = document.querySelector('#users');
  data.forEach((i) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    const link = document.createElement('a');
    link.appendChild(document.createTextNode(i.login));
    link.href = i.html_url;
    link.target = '_blank';
    li.appendChild(link);
    userList.appendChild(li);
  });
});
