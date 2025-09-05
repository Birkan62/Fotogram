let images = ['./Images/Lake.jpg','./Images/Snow.jpg','./Images/Gnu.jpg','./Images/Reh.jpg','./Images/Ant.jpg',]

let headlines = ['seagul','leaf']

let undertitle = ['beautiful_seagul', 'lonely_leaf']


function render(){
    let contentRef = document.getElementById('content');
    for (let index = 0; index < images.length; index++) {
        contentRef.innerHTML += getNotesHtml (index);
    }
}

function getNotesHtml(index){
    return ` <div class="single_element">
                                    <h2>
                                      ${headlines[index]}
                                      </h2>
                                      <p>
                                      ${undertitle[index]}
                                      </p>
                                      <img class="image-size" src="${images[index]}" alt="">
                                        </div> `
}


const meinDiv = document.getElementById('meinDiv');

const meinButton = document.createElement('button');


meinButton.textContent = 'Klick mich!';