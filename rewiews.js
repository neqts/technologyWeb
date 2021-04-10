const reviews = [
    {
      id: 1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/17/57/7d/17/2-egg-breakfast.jpg",
      client:
        "Tommy Gatsby",
        date:"2022-12-1",
        share:"Facebook,Twitter,Prinerest",
    },
    {
        id: 2,
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for",
        img: "https://www.diabnext.com/wp-content/uploads/2019/03/web-350525-breakfast.jpg",
        client:
          "Carla Carlsen",
          date:"2005-01-8",
          share:"Facebook,Twitter,YouTube",
      },
      {
        id: 3,
        desc: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/17/26/fb/finish-your-breakfast.jpg",
        client: "Kacper Fischer",
          date:"2011-11-18",
          share:"Facebook,Twitch,YouTube",
      },
      {
        id: 4,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/16/85/8d/cb/the-breakfast-club.jpg",
        client:"Michael Kasparov",
          date:"2016-04-9",
          share:"Facebook,Twitter,YouTube",
      },
  ];
  

const desc = document.querySelector("#desc")
const client = document.querySelector("#client")
const date = document.querySelector("#date")
const share = document.querySelector("#share")
const img = document.querySelector("#person-img")
const first = document.querySelector(".first")
const second = document.querySelector(".second")
const title = document.querySelector(".title")

  let currentItem =0



 window.addEventListener("DOMContentLoaded",function () {
    showPerson(currentItem)
 })
        



  function showPerson(currentItem) {
    const change = reviews[currentItem];
    img.src = change.img;
    desc.textContent= change.desc;
    client.textContent= change.client;
    date.textContent = change.date
      
  }


  second.addEventListener("click",start)
  first.addEventListener("click",prev)

  function prev() {
    currentItem--
    if(currentItem<0){
      currentItem = reviews.length-1
    }
    showPerson(currentItem)

      
  }
  

  function start() {
    currentItem++
  if(currentItem>reviews.length-1){
    currentItem=0
  }
  showPerson(currentItem)
      
  }