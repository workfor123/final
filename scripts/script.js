const form = document.querySelector('form');

function retrieveFormValue(e) {
  e.preventDefault();

  const fields = document.querySelectorAll('input');
  const values = {};

  fields.forEach(field => {
    const {name, value} = field;
    values[name] = value;
  });

  axios.post('https://api.sdkapilead.com/v2/affiliates/lead/create',
  {
    firstname: values.name,
    lastname: values.second_name,
    email: values.email,
    phone: values.phone,
  },
  { headers: { 
      Token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0ciI6IjMiLCJhYyI6IjEiLCJlb2kiOiI5OCIsInVpIjoiNDEyNCIsIkFQSV9USU1FIjoxNjM0NjUzMTAxfQ.WyPDNXVrqNT64udsocnPk8JPYxwcTctD3pJS4fvioOc',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    },
  })
  .then((res) => {
    alert(res)
  }).catch((error) => {
    alert(error);
  });

}

form.addEventListener('submit', retrieveFormValue);