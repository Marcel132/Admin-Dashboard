let leftSide = document.getElementById('left-side');
let navBarUp = document.getElementById('nav-bar-up');
let navigationButton = document.getElementById('nav-bar-down-btn-box');

// Save original content 
var originalLeftSide = leftSide.innerHTML;
var originalNavBarUp = navBarUp.innerHTML;
var originalNavigationButton = navigationButton.innerHTML;

// Funtion which restore content 

function restoreOriginalLeftSide(){leftSide.innerHTML = originalLeftSide;}
function restoreOriginalNameAccount(){navBarUp.innerHTML = originalNavBarUp;}
function restoreOriginalNavBtn(){navigationButton.innerHTML = originalNavigationButton;}

// Changing element 

window.addEventListener('resize', function(){
  if (window.innerWidth <= 920){
    leftSide.innerHTML = '<div id="dashboard"><a href="#"><img src="img/view-dashboard.svg" alt="dashboard-icon"></a></div><div id="left-side-menu"><div class="left-side-menu-list"><a href="#"><img src="img/home.svg" alt="home-icon"></a></div><div class="left-side-menu-list"><a href="#"><img src="img/card-account-details-outline.svg" alt="account-icon"></a></div><div class="left-side-menu-list"><a href="#"><img src="img/message-reply.svg" alt="messages-icon"></a></div><div class="left-side-menu-list"><a href="#"><img src="img/clock-time-three.svg" alt="history-icon"></a></div><div class="left-side-menu-list"><a href="#"><img src="img/file-multiple.svg" alt="tasks-icon"></a></div><div class="left-side-menu-list"><a href="#"><img src="img/account-group.svg" alt="communities-icon"></a></div></div><div id="left-side-support"><div class="left-side-support-list"><a href="#"><img src="img/cog.svg" alt="settings-icon"></a></div><div class="left-side-support-list"><a href="#"><img src="img/help-box-outline.svg" alt="support-icon"></a></div><div class="left-side-support-list"><a href="#"><img src="img/shield-check.svg" alt="privacy-icon"></a></div></div>';
  } else{restoreOriginalLeftSide();}
});

window.addEventListener('resize', function(){
  if(window.innerWidth <= 600){
    navBarUp.innerHTML = '<a href="#"><img src="img/magnify.svg" alt="search-icon"></a><input type="text"id="search-input"><a href="#"><img src="img/bell-ring-outline.svg" alt="notifications-icons"></a><a href="#"><img src="img/account.svg" alt="account-icon" class="account-img"></a>';
  } else {restoreOriginalNameAccount();}
});

window.addEventListener('resize', function(){
  if(window.innerWidth <= 600){
    navigationButton.innerHTML = '<div id="new-box"><a href="#" class="nav-btn"><img src="img/plus.svg" alt="new icon"></a></div><div id="upload-box"><a href="#" class="nav-btn"><img src="img/upload.svg" alt="upload icon"></a></div><div id="share-box"><a href="#" class="nav-btn"><img src="img/share-all.svg" alt="share icon"></a></div>'
  } else {restoreOriginalNavBtn();}
});




/* leftSide.innerHTML
    <div id="dashboard">
       <a href="#"><img src="img/view-dashboard.svg" alt="dashboard-icon"></a>
    </div>
    <div id="left-side-menu">
      <div class="left-side-menu-list">
        <a href="#"><img src="img/home.svg" alt="home-icon"></a>
      </div>
      <div class="left-side-menu-list">
        <a href="#"><img src="img/card-account-details-outline.svg" alt="account-icon"></a>
      </div>
      <div class="left-side-menu-list">
        <a href="#"><img src="img/message-reply.svg" alt="messages-icon"></a>
      </div>
      <div class="left-side-menu-list">
        <a href="#"><img src="img/clock-time-three.svg" alt="history-icon"></a>
      </div>
      <div class="left-side-menu-list">
        <a href="#"><img src="img/file-multiple.svg" alt="tasks-icon"></a>
      </div>
      <div class="left-side-menu-list">
        <a href="#"><img src="img/account-group.svg" alt="communities-icon"></a>
      </div>        
    </div>
      <div id="left-side-support">
        <div class="left-side-support-list">
          <a href="#"><img src="img/cog.svg" alt="settings-icon"></a>
        </div>
        <div class="left-side-support-list">
          <a href="#"><img src="img/help-box-outline.svg" alt="support-icon"></a>
        </div>
        <div class="left-side-support-list">
          <a href="#"><img src="img/shield-check.svg" alt="privacy-icon"></a>
        </div>
     </div>
*/

/* navBarUp.innerHTML 
<a href="#"><img src="img/magnify.svg" alt="search-icon"></a>
<input type="text"id="search-input">
<a href="#"><img src="img/bell-ring-outline.svg" alt="notifications-icons"></a>
<a href="#"><img src="img/account.svg" alt="account-icon" class="account-img"></a> 
*/

/* navigationButton.innerHtml
  <div id="new-box">
    <a href="#" class="nav-btn"><img src="img/plus.svg" alt="new icon"></a>
  </div>
  <div id="upload-box">
    <a href="#" class="nav-btn"><img src="img/upload.svg" alt="upload icon"></a>
  </div>
  <div id="share-box">
    <a href="#" class="nav-btn"><img src="img/share-all.svg" alt="share icon"></a>
  </div>
*/
