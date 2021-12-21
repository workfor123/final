const form = document.querySelector('form');

function retrieveFormValue(e) {
  e.preventDefault();

  const fields = document.querySelectorAll('input');
  const values = {};
  let test = {};

  fields.forEach(field => {
    const {name, value} = field;
    values[name] = value;
  });
  

  // const ip = fetch('https://api.ipify.org/?format=json')
  //   .then(response => response.json())
  //   .then(data => test = data)
  //   .then(console.log(test));

  // fetch('http://www.geoplugin.net/json.gp?jsoncallback=?')
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  // fetch("https://api.ipregistry.co/?key=tryout").then(async response => {
  //   try {
  //    const data = await response.json()
  //    console.log('response data?', data)
  //  } catch(error) {
  //    console.log('Error happened here!')
  //    console.error(error)
  //  }
  // })


  // async function fetchExam(id) {
  //   try {
  //     const response = await fetch('http://www.geoplugin.net/json.gp?jsoncallback=?');
  //     const exam = await response.json();
  //     return exam;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // async function renderExam(id) {
  //   const exam = await fetchExam(id);
  //   for(let key in exam) {
  //     values[key] = exam[key];
  //   }
  // }

  // renderExam()


  async function fetchExam(id) {
    try {
      const response = await fetch('https://api.ipregistry.co/?key=tryout');
      const exam = await response.json();
      return exam;
    } catch (error) {
      console.log(error)
    }
  }

  async function renderExam(id) {
    const exam = await fetchExam(id);
    for(let key in exam) {
      if(key === 'ip') {
        values[key] = exam[key];
      }
    }
    for(let key in exam) {
      if(key === 'location') {
        values[key] = exam[key].city
      }
    }
  }

  renderExam()



  // axios.post('https://api.sdkapilead.com/v2/affiliates/lead/create',
  // {
  //   firstname: values.name,
  //   lastname: values.second_name,
  //   email: values.email,
  //   phone: values.phone,
  // },
  // { headers: { 
  //     Token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0ciI6IjMiLCJhYyI6IjEiLCJlb2kiOiI5OCIsInVpIjoiNDEyNCIsIkFQSV9USU1FIjoxNjM0NjUzMTAxfQ.WyPDNXVrqNT64udsocnPk8JPYxwcTctD3pJS4fvioOc',
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
  //     "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  //   },
  // })
  // .then((res) => {
  //   alert(res)
  // }).catch((error) => {
  //   alert(error);
  // });

  console.log(values);
}

form.addEventListener('submit', retrieveFormValue);