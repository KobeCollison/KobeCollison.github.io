//WeekProject(int weeknum,str machine, Date date)
class WeekProject{
    constructor(wn, m,d){
        this.weekNum = wn;
        this.machine = m;
        this.date = d;
        this.href = "blank";
        this.imgSrc= "blank"
    }


    // getter functions
    getWeekNum(){
        return this.weekNum;
    }
    getMachine(){
        return this.machine;
    }
    getDate(){
        return this.date;
    }
    getHref(){
        return this.href;
    }
    getImgSrc(){
        return this.imgSrc;
    }


    // setter functions
    setWeekNum(wn){
        this.weekNum = wn;
    }
    setMachine(m){
        this.machine = m;
    }
    setDate(d){
        this.date = d;
    }
    setHref(str){
        this.href = str;
    }
    setImgSrc(str){
        this.imgSrc = str;
    }

}

var publishedProjects = [];

// project 1
week1 = new WeekProject(1,"Building the website",new Date('September 6, 2021 03:24:00'));
week1.setHref("week1log.html");
week1.setImgSrc("images/weekLogos/week1.png")
publishedProjects.push(week1);


// project 2
week2 = new WeekProject(2,"Vinyl Cutting",new Date('September 13, 2021 03:24:00'));
week2.setHref("week2log.html");
week2.setImgSrc("images/weekLogos/week2.jpg")
publishedProjects.push(week2);


// project 3
week3 = new WeekProject(3,"Laser Cutting",new Date('September 20, 2021 03:24:00'));
week3.setHref("week3log.html");
week3.setImgSrc("images/weekLogos/week3.png")
publishedProjects.push(week3);

// project 4
week4 = new WeekProject(4,"Digital Embroidery",new Date('September 27, 2021 03:24:00'));
week4.setHref("week4log.html");
week4.setImgSrc("images/weekLogos/week4.png")
publishedProjects.push(week4);

// project 5
week5 = new WeekProject(5,"CNC Routing",new Date('October 4, 2021 03:24:00'));
week5.setHref("week5log.html");
week5.setImgSrc("images/weekLogos/week5.png")
publishedProjects.push(week5);

// project 5
week6 = new WeekProject(6,"FDM Printing",new Date('October 11, 2021 03:24:00'));
week6.setHref("week6log.html");
week6.setImgSrc("images/weekLogos/week6.png")
publishedProjects.push(week6);


// project 7
week7 = new WeekProject(7,"SLA Printing",new Date('October 18, 2021 03:24:00'));
week7.setHref("week7log.html");
week7.setImgSrc("images/weekLogos/week7.png")
publishedProjects.push(week7);

// project: integrate
weekIntegrate = new WeekProject(": Integrate","4 Machines used",new Date('Novemvber, 2021 03:24:00'));
weekIntegrate.setHref("project_integrate.html");
weekIntegrate.setImgSrc("images/weekLogos/Integrate.jpeg")
publishedProjects.push(weekIntegrate);

// // project: Final (geometry)
// final_geo = new WeekProject("Geometry","Final",new Date('December 6, 2021 03:24:00'));
// final_geo.setHref("final_geo.html");
// final_geo.setImgSrc("images/weekLogos/final.png")
// publishedProjects.push(final_geo);

// project: Final
weekFinal = new WeekProject(": Final","4 Machines used",new Date('December 6, 2021 03:24:00'));
weekFinal.setHref("project_final.html");
weekFinal.setImgSrc("images/weekLogos/final.png")
publishedProjects.push(weekFinal);



// appends an li containing week project and 

function addWeekToList(toAdd){

    weekList = document.getElementById("weekList");

    //creates anchor that links to coresponding week log
    const weekLink = document.createElement("A");
    weekLink.setAttribute("href",toAdd.getHref() );  

    //creates an list item of  the current project
    const projStamp = document.createElement("li");
    projStamp.setAttribute("class","w3-padding-16");

    weekLink.appendChild(projStamp);
    weekList.appendChild(weekLink);


    // add img to stamp
    const image = document.createElement("IMG");
    image.setAttribute("src",toAdd.getImgSrc() );  
    image.setAttribute("width","50");
    image.setAttribute("alt","project "+toAdd.getWeekNum()+"log preview");
    image.setAttribute("class","w3-left w3-margin-right");

    // add week title to stamp
    const weekTitle = document.createElement("span");
    weekTitle.setAttribute("class","w3-large");
    weekTitle.innerHTML = "Project "+toAdd.getWeekNum();

    // add week subtitle to stamp
    const weekSubtitle = document.createElement("span");
    weekSubtitle.innerHTML = toAdd.getMachine();

    // populate the list item
    projStamp.appendChild(image);
    projStamp.appendChild(weekTitle);
    projStamp.appendChild(document.createElement("BR"));    
    projStamp.appendChild(weekSubtitle);

}

window.onload=function(){

    publishedProjects.forEach(element => addWeekToList(element));

};
