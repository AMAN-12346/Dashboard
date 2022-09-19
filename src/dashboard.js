import React, { useState} from 'react';
//  
import { desktop } from "react-icons/fa";


 function Dashboard(){
function handleClick(classname) {
          //   document.getElementsByClassName('sidebar')[0].style.margin = '20px';
          console.log(">>>>>",  document.getElementsByClassName('sidebar'))
          if (document.getElementById('main-content').style.width == '100%') {
alert("dfs")
               const element = document.getElementsByClassName('sidebar')[0];
               element.removeAttribute('class', "close")
               document.getElementById('main-content').style.width = '50%';
          } else {
               const element = document.getElementsByClassName('sidebar')[0];
               element.setAttribute('class', "close")
               document.getElementById('main-content').style.width = '100%';
          }

     }






    return(
       <>
       
        <section id="sidebar" class="sidebar">
          <div class="sidebar-brand">
            
               <h2><i class="fa fa-desktop"></i><span> Websblog</span></h2>
                        </div>
          <div class="sidebar-menue">
               <ul>
                   <li> 
                       <fa-desktop/>
                   </li>
                    <li><a href=""><i class="fa fa-desktop"></i><span>Dashboard</span></a></li>
                    <li><a href=""><i class="fa fa-users"></i><span>Customers</span></a></li>
                    <li><a href=""><i class="fa fa-file"></i><span>Projects</span></a></li>
                    <li><a href=""><i class="fa fa-file-pdf-o"></i><span>Orders</span></a></li>
                    <li><a href=""><i class="fa fa-money"></i><span>Income</span></a></li>
                    <li><a href=""><i class="fa fa-user"></i><span>Account</span></a></li>
                    <li><a href=""><i class="fa fa-sign-out"></i><span>Logout</span></a></li>
               </ul>
          </div>
     </section>

     <section id="main-content">
          <header class="main-header">
              
               <div class="header-left">
                    <h2><i class="fa fa-bars toggle-icon" onclick="handleClick('toggle-icon')"></i>&nbsp; Dashboard</h2>
               </div>
               <div class="header-left">
                    <input class="search-bar" type="text" placeholder="search"></input>
                    <i class="fa fa-search"></i>
               </div>
               <div class="header-left">
                    <div class="logo">
                         <img width="40" src="07.png" class="img-responsive" />
                    </div>
                    <div class="sub">
                         <h3>Webs blog</h3>
                         <p>Admin</p>
                    </div>
               </div>
               
</header>

         
         


          <div class="main-content-info container"></div>
               <div class="card-box">
                    <h2 class="cus-num cus-h">130</h2>
                    <p>customers</p>
               </div>

               <div class="card-box">
                    <h2 class="cus-num cus-pro">250</h2>
                    <p>projects</p>
               </div>

               <div class="card-box">
                    <h2 class="cus-num cus-ord">155</h2>
                    <p>orders</p>
               </div>
               <div class="card-box">
                    <h2 class="cus-num cus-inc">100k</h2>
                    <p>income</p>
                
</div>
    </section>           
        
        <div class="content-pro-par container">
        <div class="pro-table">
        <div class="rec-h">
         
         <h2>Recent Project</h2>
         
         <div class="rec-btn">
                              <button>See All</button>
                         </div>

                         <table width={'50%'}>
                    <thead>
                        <tr>
                            <th>Project tittle</th>
                            <th>Department</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>

                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>

                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>

                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>

                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>

                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>

                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>

                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>
                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>

                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>

                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>

                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>

                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>
                        <tr>
                            <td>Web development</td>
                            <td>Development team</td>
                            <td><span class="rev-span"></span>review</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                </div>

                <div class="cus-table">
                <div class="recent-pro">
                <div class="rec-h"></div>
                <h2>All Customers</h2>

                <div class="rec-btn">
                    <button>See All</button>
                </div>
                <table width={'30%'}>
                     <thead>
                         <tr>
                              <th>Pic</th>
                              <th>Name</th>
                              <th>Contact</th>
                         </tr>
                         </thead>
                         <tbody>
                         <tr>
                              
                              <td class="td-img"><img src="07.png" /></td>
                              <td>Aman</td>
                              <td class="td-cnt-i"><a href="tel:9315753159"><i class="fa fa-phone"></i></a><a
                                        href="mailto:dummy@gmail.com"><i class="fa fa-envelope"></i></a><a
                                        href="tel:9315753159"><i class="fa fa-map-marker"></i></a></td>
                         </tr>
 
                         <tr>
                              <td class="td-img"><img src="07.png" /></td>
                              <td>Aman</td>
                              <td class="td-cnt-i"><a href="tel:9315753159"><i class="fa fa-phone"></i></a><a
                                        href="mailto:dummy@gmail.com"><i class="fa fa-envelope"></i></a><a
                                        href="tel:9315753159"><i class="fa fa-map-marker"></i></a></td>
                         </tr>
                         <tr>
                              <td class="td-img"><img src="07.png" /></td>
                              <td>Aman</td>
                              <td class="td-cnt-i"><a href="tel:9315753159"><i class="fa fa-phone"></i></a><a
                                        href="mailto:dummy@gmail.com"><i class="fa fa-envelope"></i></a><a
                                        href="tel:9315753159"><i class="fa fa-map-marker"></i></a></td>
                         </tr>
                         <tr>
                              <td class="td-img"><img src="07.png" /></td>
                              <td>Aman</td>
                              <td class="td-cnt-i"><a href="tel:9315753159"><i class="fa fa-phone"></i></a><a
                                        href="mailto:dummy@gmail.com"><i class="fa fa-envelope"></i></a><a
                                        href="tel:9315753159"><i class="fa fa-map-marker"></i></a></td>
                         </tr>
                         <tr>
                              <td class="td-img"><img src="07.png" /></td>
                              <td>Aman</td>
                              <td class="td-cnt-i"><a href="tel:9315753159"><i class="fa fa-phone"></i></a><a
                                        href="mailto:dummy@gmail.com"><i class="fa fa-envelope"></i></a><a
                                        href="tel:9315753159"><i class="fa fa-map-marker"></i></a></td>
                         </tr>
                         <tr>
                              <td class="td-img"><img src="07.png" /></td>
                              <td>Aman</td>
                              <td class="td-cnt-i"><a href="tel:9315753159"><i class="fa fa-phone"></i></a><a
                                        href="mailto:dummy@gmail.com"><i class="fa fa-envelope"></i></a><a
                                        href="tel:9315753159"><i class="fa fa-map-marker"></i></a></td>
                         </tr>
                         <tr>
                              <td class="td-img"><img src="07.png" /></td>
                              <td>Aman</td>
                              <td class="td-cnt-i"><a href="tel:9315753159"><i class="fa fa-phone"></i></a><a
                                        href="mailto:dummy@gmail.com"><i class="fa fa-envelope"></i></a><a
                                        href="tel:9315753159"><i class="fa fa-map-marker"></i></a></td>
                         </tr>
                         <tr>
                              <td class="td-img"><img src="07.png" /></td>
                              <td>Aman</td>
                              <td class="td-cnt-i"><a href="tel:9315753159"><i class="fa fa-phone"></i></a><a
                                        href="mailto:dummy@gmail.com"><i class="fa fa-envelope"></i></a><a
                                        href="tel:9315753159"><i class="fa fa-map-marker"></i></a></td>
                         </tr>
                         <tr>
                              <td class="td-img"><img src="07.png" /></td>
                              <td>Aman</td>
                              <td class="td-cnt-i"><a href="tel:9315753159"><i class="fa fa-phone"></i></a><a
                                        href="mailto:dummy@gmail.com"><i class="fa fa-envelope"></i></a><a
                                        href="tel:9315753159"><i class="fa fa-map-marker"></i></a></td>
                         </tr>
                         <tr>
                              <td class="td-img"><img src="07.png" /></td>
                              <td>Aman</td>
                              <td class="td-cnt-i"><a href="tel:9315753159"><i class="fa fa-phone"></i></a><a
                                        href="mailto:dummy@gmail.com"><i class="fa fa-envelope"></i></a><a
                                        href="tel:9315753159"><i class="fa fa-map-marker"></i></a></td>
                         </tr>
                         </tbody>
                </table>
                </div>
                </div>
                    
               </>


    


    );
}

export default Dashboard;