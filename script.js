
let RollNumberA = parseInt(Math.random()*1000000000, 10)
let RollNumberB = parseInt(Math.random()*1000000000, 10)
let RollNumberC = parseInt(Math.random()*1000000000, 10)
let RollNumberD = parseInt(Math.random()*1000000000, 10)


const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    // console.log(form.elements)
    const {name ,dob,email,mobile,pob,lang,hobbies,pl,classPassed,school}= form.elements;
    // console.log(name.value,email.value,mobile.value,dob.value)
    let html =  `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <title>Practical File: ${name.value}</title>
        <style>
        @media print {
          .pagebreak { page-break-before: always; } /* page-break-after works, as well */
      }
            html{
                margin: 0;
                padding: 0;
            }
          .container_0 {
            display: flex;
            justify-content: center;
            background-color: #f3f4f5;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .container div {
            background-color: #f3f4f5;
            
          }
          #bio h1{
            text-align: center;
            padding-top: 10px;
          }
          #bio ul {
            list-style: none;
            display: table;
          }
    
         #bio ul li {
            display: table-row;
          }
    
          b {
            display: table-cell;
            padding-right: .75em;
          }
          table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    
    tr:nth-child(even) {
      background-color: #dddddd;
    }
        </style>
      </head>
      <body>
      <button class="btn btn-dark" id="download">Download PDF </button>
        <div class="container_0">
           <i>Output</i>
          <div id="bio">
            <h1><u>Bio-Data</u></h1>
            <ul>
              <li><b>Name</b>: ${name.value}</li>
              <li><b>Date Of Birth</b>: ${dob.value}</li>
              <li><b>E-mail</b>: ${email.value}</li>
              <li><b>Mobile</b>: +91-${mobile.value}</li>
              <li><b>Place Of Birth</b>: ${pob.value}</li>
              <li><b>Languages Known</b>: ${lang.value}</li>
              <li><b>Hobbies</b>: ${hobbies.value}</li>
              <li><b>Places Lived</b>: ${pl.value}</li>
            </ul>
            <h1><u>Educational Qualification</u></h1>
            <table>
                <tr>
                  <th>Standard</th>
                  <th>School/University</th>
                  
                </tr>
                <tr>
                  <td>${classPassed.value}</td>
                  <td>${school.value}</td>
                  
                </tr>
               
              </table>
          </div>
        </div>
        <div class="pagebreak"> </div>
        <i>Input</i>
        <xmp>
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            <title>Bio Data ${name.value}</title>
            <style>
                html{
                    margin: 0;
                    padding: 0;
                }
              .container {
                display: flex;
                justify-content: center;
                background-color: #f3f4f5;
                padding-top: 10px;
                padding-bottom: 10px;
              }
              .container div {
                background-color: #f3f4f5;
                
              }
              h1{
                text-align: center;
                padding-top: 10px;
              }
              .container div  ul  {
                list-style: none;
                display: table;
              }
        
              .container div  li {
                display: table-row;
              }
        
              b {
                display: table-cell;
                padding-right: .75em;
              }
              table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        
        tr:nth-child(even) {
          background-color: #dddddd;
        }
            </style>
          </head>
          <body>
            <div class="container">
               <i>Output</i>
              <div id="bio">
                <h1><u>Bio-Data</u></h1>
                <ul>
                  <li><b>Name</b>: ${name.value}</li>
                  <li><b>Date Of Birth</b>: ${dob.value}</li>
                  <li><b>E-mail</b>: ${email.value}</li>
                  <li><b>Mobile</b>: +91-${mobile.value}</li>
                  <li><b>Place Of Birth</b>: ${pob.value}</li>
                  <li><b>Languages Known</b>: ${lang.value}</li>
                  <li><b>Hobbies</b>: ${hobbies.value}</li>
                  <li><b>Places Lived</b>: ${pl.value}</li>
                </ul>
                <h1><u>Educational Qualification</u></h1>
                <table>
                    <tr>
                      <th>Standard</th>
                      <th>School/University</th>
                      
                    </tr>
                    <tr>
                      <td>${classPassed.value}</td>
                      <td>${school.value}</td>
                      
                    </tr>
                   
                  </table>
              </div>
            </div>
            </body>
    </html>
        </xmp>
      </body>
    </html>
    <div class="pagebreak"> </div>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document with Bold, Italics, Underline, Colors, Headings,
        Title, Font and Font Width, Background, Paragraph, Line Brakes, Horizontal Line, Blinking text as
        well as marquee text. </title>
</head>
<body>
<i>Output</i><br>
    <small>Document with Bold, Italics, Underline, Colors, Headings,
        Title, Font and Font Width, Background, Paragraph, Line Brakes, Horizontal Line, Blinking text as
        well as marquee text. </small><br><br><br><br>

        <b>Bold Tag</b><br>
        <i> Italics Tag</i><br>
        <u>Underline Tag</u>
        <p style="color: #07781C;">Tag With Color</p>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <title>Title Of Page</title>
        <p style="font-size: 1rem;"> Tag with Font Size And Width</p>
        <p style="background-color: #07781C;">Tag With Background Color</p>
        <p>Paragraph Tag</p>
        <hr>
        <blink>Blinking text</blink>
        <Marquee>Marquee Text.</Marquee>
        <h1>Document Internal and External Images</h1>
    <img
      src="https://picsum.photos/200"
    />
    <img src="https://random.imagecdn.app/500/150" /><br>
    <h1>Table</h1>

<table>
  <tr>
    <th rowspan="2">Roll Number</th>
    <th colspan="2">Practical Marks</th>
    <th rowspan="2">Total</th>
  </tr>
  <tr>
    <td>Internal</td>
    <td>External</td>
    
  </tr>
  <tr>
    <td>${RollNumberA}</td>
    <td>20</td>
    <td>30</td>
    <td>50</d>
  </tr>
  <tr>
    <td>${RollNumberA}</td>
    <td>20</td>
    <td>30</td>
    <td>50</d>
  </tr>
  <tr>
    <td>${RollNumberA}</td>
    <td>20</td>
    <td>30</td>
    <td>50</d>
  </tr>
  <tr>
    <td>${RollNumberA}</td>
    <td>20</td>
    <td>30</td>
    <td>50</d>
  </tr>
</table>
<ul>
<li type="A">Courses</li>
<ul>
    <li type="a">BCA</li>
    <li type="a">BBA</li>
    <li type="a">BSC IT</li>
    <li type="a">BA</li>
    <li type="a">BSC</li>
    <li type="a">BMMMC</li>
    <li type="a">BMMMC</li>
    </ul>
    <li>Semester</li>
    <ul>
    <li>First Semester</li>
    <li>Second Semester</li>
    <li>Third Semester</li>
    <li>Fourth Semester</li>
    <li>Fifth Semester</li>
    <li>Sixth Semester</li>
</ul>
<li>Batch</li>
<ul>
    <li type="I">2018</li>
    <li type="I">2019</li>
    <li type="I">2020</li>
    <li type="I">2021</li>
    <li type="I">2022</li>
   
</ul>
</ul>
<div class="pagebreak"> </div>
        <i>Input</i><br>
<xmp>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document with Bold, Italics, Underline, Colors, Headings,
        Title, Font and Font Width, Background, Paragraph, Line Brakes, Horizontal Line, Blinking text as
        well as marquee text. </title>
</head>
<body>
    <small>Document with Bold, Italics, Underline, Colors, Headings,
        Title, Font and Font Width, Background, Paragraph, Line Brakes, Horizontal Line, Blinking text as
        well as marquee text. </small><br><br><br><br>

        <b>Bold Tag</b><br>
        <i> Italics Tag</i><br>
        <u>Underline Tag</u>
        <p style="color: #07781C;">Tag With Color</p>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <title>Title Of Page</title>
        <p style="font-size: 1rem;"> Tag with Font Size And Width</p>
        <p style="background-color: #07781C;">Tag With Background Color</p>
        <p>Paragraph Tag</p>
        <hr>
        <blink>Blinking text</blink>
        <Marquee>Marquee Text.</Marquee>

        <h1>Document Internal and External Images</h1>
    <img
      src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
    />
    <img src="./images.jpg" />
    <h1>Table</h1>

<table>
  <tr>
    <th rowspan="2">Roll Number</th>
    <th colspan="2">Practical Marks</th>
    <th rowspan="2">Total</th>
  </tr>
  <tr>
    <td>Internal</td>
    <td>External</td>
    
  </tr>
  <tr>
    <td>${RollNumberA}</td>
    <td>20</td>
    <td>30</td>
    <td>50</d>
  </tr>
  <tr>
    <td>${RollNumberA}</td>
    <td>20</td>
    <td>30</td>
    <td>50</d>
  </tr>
  <tr>
    <td>${RollNumberA}</td>
    <td>20</td>
    <td>30</td>
    <td>50</d>
  </tr>
  <tr>
    <td>${RollNumberA}</td>
    <td>20</td>
    <td>30</td>
    <td>50</d>
  </tr>
</table>
<ul>
<li type="A">Courses</li>
<ul>
    <li type="a">BCA</li>
    <li type="a">BBA</li>
    <li type="a">BSC IT</li>
    <li type="a">BA</li>
    <li type="a">BSC</li>
    <li type="a">BMMMC</li>
    <li type="a">BMMMC</li>
    </ul>
    <li>Semester</li>
    <ul>
    <li>First Semester</li>
    <li>Second Semester</li>
    <li>Third Semester</li>
    <li>Fourth Semester</li>
    <li>Fifth Semester</li>
    <li>Sixth Semester</li>
</ul>
<li>Batch</li>
<ul>
    <li type="I">2018</li>
    <li type="I">2019</li>
    <li type="I">2020</li>
    <li type="I">2021</li>
    <li type="I">2022</li>
   
</ul>
</ul>
</body>
</html>

<xmp>

</body>
</html>



    `
    document.getElementById("dom").innerHTML = html
    let download = document.getElementById("download")
    download.addEventListener("click", (e)=>{
      download.style.display="none"
      window.print();
      
      // console.log(download)
    })
    // console.log(html)
});
// let download = document.getElementById("download")
// console.log(download)
// if(download){
//   console.log(download)
  
// }