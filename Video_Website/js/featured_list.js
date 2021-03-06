function addItem(){
    var ul = document.getElementById("home_tags_list");
    var videos = document.getElementById("home_videos_list");
    for (var i = 0; i < values.length; i++) {
        var li = document.createElement("li"); // creates a list which will be later used for search functionality
        li.setAttribute('class', 'bogus'); // Change this to set the Intellectual Disability of the li item
        var iframe = document.createElement('iframe');
        iframe.setAttribute('width', 560);
        iframe.setAttribute('height', 315);
        iframe.setAttribute('src', values[i].link);
        iframe.setAttribute('allow', "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
        iframe.setAttribute('frameborder', 0);

        var age = "Age: ";
        var age_ = age.bold();
        var gender = "Gender: ";
        var gender_ = gender.bold();
        var year = "Year: ";
        var year_ = year.bold();
        var location = "Location: ";
        var location_ = location.bold();
        var disab = "Disability: ";
        var disab_ = disab.bold();
        var theme = "Theme: ";
        var theme_ = theme.bold();
        var language = "Language: ";
        var language_ = language.bold();

        var box = document.createElement("div");
        box.setAttribute('class', 'box');

        var video_box = document.createElement("div");
        video_box.setAttribute('class', 'video_box');

        var age = document.createElement("p");
        age.setAttribute('class', 'age');
        age.innerHTML = age_ + values[i].age;

        var gender = document.createElement("p");
        gender.setAttribute('class', 'gender');
        gender.innerHTML = gender_ + values[i].gender;

        var year = document.createElement("p");
        year.setAttribute('class', 'year');
        year.innerHTML = year_ + values[i].year;

        var location = document.createElement("p");
        location.setAttribute('class', 'location');
        location.innerHTML = location_ + values[i].location;

        var disab = document.createElement("p");
        disab.setAttribute('class', 'disability');
        disab.innerHTML = disab_ + values[i].disability;

        var theme = document.createElement("p");
        theme.setAttribute('class', 'theme');
        theme.innerHTML = theme_ + values[i].theme;

        var language = document.createElement("p");
        language.setAttribute('class', 'language');
        language.innerHTML = language_ + values[i].language;

        var br = document.createElement("br");

        //Append to list in order to display it on the website
        video_box.appendChild(iframe);
        videos.appendChild(video_box);
        // videos.appendChild(br);
        box.appendChild(age);
        box.appendChild(gender);
        //Uncomment the below line of code, in order to display the year of the video.
        //box.appendChild(year);
        box.appendChild(location);
        box.appendChild(disab);
        box.appendChild(theme);
        box.appendChild(language);
        li.appendChild(box);
        // li.appendChild(br);
        ul.appendChild(li);
    }
}

var options = {
  valueNames: [ 'name', 'year', 'location', 'age', 'gender', 'dname', 'disability', 'theme', 'language', 'link' ]
};

var values = [
     {
      "name": "Cynthia Hunt",
      "year": "2018",
      "location": "Tennessee",
      "age": "Adult Service",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Funding for programs for adult services; Parent training for law, rights and advocacy; After school program;",
      "language": "English",
      "link": "https://www.youtube.com/embed/3bZrRkGRZlk"
    },
    {
      "name": "Jannes Roth",
      "year": "2018",
      "location": "Tennessee",
      "age": "Adult Service",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Educational training on rights and responsibilities; Increase Part D funding (Parent resource centers);",
      "language": "English",
      "link": "https://www.youtube.com/embed/gP3CWd_yfHw"
    },
    {
      "name": "Shontie Brown",
      "year": "2018",
      "location": "Tennessee",
      "age": "Early Childhood",
      "gender": "Female",
      "disability": "Down Syndrome",
      "theme": "More funding for inclusion with LRE;",
      "language": "English",
      "link": "https://www.youtube.com/embed/w0gbyegY6Q4"
    },
    {
      "name": "Aceriane Leal",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Male",
      "disability": "Attention Deficit Hyperactivity Disorder",
      "theme": "Gap in transition service between EI and Kinder; Training for school personnel and parents, Resources for parents",
      "language": "English",
      "link": "https://www.youtube.com/embed/PAHsC0lsxto"
    },
    {
      "name": "Amanda Bailey",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Inclusion in LRE; Seamless transition from EI",
      "language": "English",
      "link": "https://www.youtube.com/embed/4Eu0MRSVCTs"
    }
];
addItem();
var userList = new List('users', options);

