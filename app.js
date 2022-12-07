// const BASE_URL='https://dog.ceo/api/breeds/image/random'

// const axiosInstance=axios.create({
//     baseUrl: BASE_URL,
//     // timeout:1000
// });

// const network={
//     getAll:()=>{
//     let responseData=[]
//        axiosInstance.get()
//         .then(res=>{
//                console.log(res.data)
//                responseData=res.data
//         })
//     }
// }

let url = "https://dog.ceo/api/breeds/image/random";
let image_div=document.getElementById('image')
let img=document.createElement('img')
img.classList.add('serhed')


setInterval(() => {
  axios.get(url).then((res) => {
    console.log(res.data.message);
    img.src=res.data.message
    document.querySelector('#image').appendChild(img)

  });
}, 2000);
