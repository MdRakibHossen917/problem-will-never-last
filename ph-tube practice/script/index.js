function removeActiveClass (){
    const activeButtons = document.getElementsByClassName("active")

    for(let btn of activeButtons ){
        btn.classList.remove("active")
    }
    console.log(activeButtons);
}

function loadCategories() {
  // 1- fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // 2- convert promise to json
    .then((res) => res.json())
    // 3- send data to display
    .then((data) => displayCategories(data.categories));
}

function loadVideos(searchText = "") {
  fetch(
    ` https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("btn-all").classList.add("active");
      displayVideos(data.videos);
    });
}


const loadVideoDetails=(videoId)=>{
  console.log(videoId)
  const url= `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideoDetails(data.video));

}

const displayVideoDetails=(video)=>{
  console.log(video);
 document.getElementById("videoDetailsModal").showModal();
 const detailsContainerModal = document.getElementById("details-Container-Modal")
 detailsContainerModal.innerHTML = `
  
 <div class="card bg-base-100 image-full   shadow-sm">
  <figure>
    <img 
      src=" ${video.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p> Name: ${video.authors[0].profile_name} <br>Views: ${video.others.views}</p>
       
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
 
 `;

}


const loadCategoryVideos =(id)=> {
    
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        removeActiveClass();
        const clickedButton = document.getElementById(`btn-${id}`);
        clickedButton.classList.add("active")

        console.log(clickedButton);
        displayVideos(data.category);
      });



}

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

//arrow function will try displayVideos function
const displayVideos = (videos) => {
  //console.log(videos);
  const videoContainer = document.getElementById("video-container");

  videoContainer.innerHTML="";
  if (videos.length==0){
    videoContainer.innerHTML = `
     <div class="col-span-full flex flex-col justify-center items-center text-center py-10">
            <img class="w-32" src="./assets/Icon.png" alt="">
            <h2 class="font-bold">Oops!! Sorry, There is no <br>content here</h2>
        </div>
        `;
    return;

  }
    videos.forEach((video) => {
      //console.log(video)

      //create element
      const videoCard = document.createElement("div");
      videoCard.innerHTML = `
       <div class="card bg-base-100  ">
            <figure class="relative">
                <img class="rounded-md w-full h-40 object-cover " src="${
                  video.thumbnail
                }"  
                 />
                 <span class="bg-black text-sm text-white absolute bottom-2 right-2 p-1 rounded-lg">3hrs 56 min ago</span>

            </figure>
            <div class="flex gap-3 px-0 py-5">
               <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                        <img src="${video.authors[0].profile_picture}" />
                    </div>
                </div>
               </div>
               <div class="intro">
                <h2 class="text-sm font-semibold">${video.title}</h2>
                <p class="flex gap-1 text-sm text-gray-500"> ${
                  video.authors[0].profile_name
                }  
                ${
                  video.authors[0].verified == true
                    ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png" alt="">`
                    : ``
                }  
               </p>
                <p class="text-sm text-gray-500">${video.others.views} Views</p>
               </div>
                
        
                </div>
            </div>
            <button onclick="loadVideoDetails('${
              video.video_id
            }')" class="btn btn-block">Show Details</button>
        </div>
        `;

      //append
      videoContainer.append(videoCard);
    });
};

// {
//     "category_id": "1001",
//     "category": "Music"
// }
function displayCategories(categories) {
  // get the container
  const categoryContainer = document.getElementById("category-container");
  // Loop operation on Array of object
  for (let cat of categories) {
    //console.log(cat);
    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
       <button id="btn-${cat.category_id}"  onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
      `;
    // Append the element
    categoryContainer.append(categoryDiv);
  }
}

document.getElementById("search-input").addEventListener("keyup",(e)=>{
  const input= e.target.value;
  loadVideos(input)
})

loadCategories();

// loadVideos();
