<template>
<div>
  <h1>Sellers</h1>
   <div class="searchbar">Search By: 
     <select style="border:0.2px solid black; border-radius:7px;padding:5px; background:whitesmoke;" v-model="category">
        <option value="name">name</option>
        <option value="address">address</option>
        <option value="contact">contact</option>
        <option value="userid">userid</option>
        </select>
        <!-- <b-dropdown v-model="category" id="dropdown-1" text="Category" class="m-md-2">
    <b-dropdown-item>Name</b-dropdown-item>
    <b-dropdown-item>Address</b-dropdown-item>
    <b-dropdown-item>Contact No</b-dropdown-item>
     <b-dropdown-item>User Id</b-dropdown-item> -->
    <!-- <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
  <!-- </b-dropdown> -->
  &nbsp;&nbsp;&nbsp;
        <input style="border:0.2px solid black; border-radius:10px;width:20vw;padding:5px; background:whitesmoke;" type="text" placeholder="search" v-model="searchkey">
        <button style="background:#01c5a1; color:white; border-radius:3px; padding:5px;" @click="processSearch()"><ion-icon name="search-sharp"></ion-icon></button> 
        <div style="float:right; margin-right:10vw;"> Sort By:<select style="border:0.2px solid black; border-radius:7px;padding:5px; background:whitesmoke;" v-model="sortby">
        <option value="name">name</option>
        <option value="userid">userid</option>
        </select> </div></div>
  <div class="admin-display-container">
        <div class="grid-container">
          <SellerCardComponent
            v-for="(sellerdata, index) in sellers" :sellerprop="sellerdata"
            :key="index"
          ></SellerCardComponent>
        </div>
      </div>
</div>
</template>

<script src="./scripts/sellerManagement.js">
</script>
<style scoped>
.search-bar{
  padding-bottom:10px;
}
.loader {
  margin: 10vh;
  border: 1em solid lightgray;
  border-radius: 50%;
  border-top: 16px solid #029d80;
  width: 4em;
  height: 4em;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
.leftNav{
   height: 100%; 
  width: 50%; 
  position: fixed; 
  z-index: 1; 
  top: 0; 
  left: 0;
  background-color: #111; 
  overflow-x: hidden; 
  padding-top: 60px;
  transition: 0.5s;
}

 /* Safari
 @-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
   25% { -webkit-transform: rotate(360deg);}
  50% { -webkit-transform: rotate(0deg);}
  75% {-webkit-transform: rotate(360deg);} 
   100% {
    -webkit-transform: rotate(360deg);
  }
} */

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  75% {
    transform: rotate(540deg);
  }
  100% {
    transform: rotate(720deg);
  }
}
.main-container {
  background-color: whitesmoke;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: column;
  justify-content: center;
  align-content: center;
  padding-top: 1em;
  overflow: scroll;
}
.admin-container-banner {
  max-width: 95%;
  height: 20vh;
  margin: 2em;
  background: whitesmoke;
  border: none;
  border-radius: 1em;
  box-shadow: 2px 2px 10px #f9f9f9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: large;
  color: gray;
}
.admin-container-banner:hover {
  cursor: pointer;
  color: black;
} 
 .admin-container {
  height: 80vh;
  width: 90vw;
  background-color: white;
  border: none;
  border-radius: 1em;
  overflow: scroll;
}

.admin-container .option-bar {
  margin: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.3m;
  background-color: white;
  border-radius: 0.7em;
   border: 2px solid #f9f9f9 
 }
.admin-container .option-bar{
  margin: 0.2em 0.2em;
  padding: 0.3em 0.7em;
  font-size: large;
  background-color: #01c5a1;
  color: white;
  border-radius: 0.5em;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.admin-container .search-bar {
  border: none;
  padding: 0.5em;
  width: 50vw;
  border-radius: 0.5em !important;
  border: 2px solid #f9f9f9;
  columns: #f2f2f2;
  color: rgb(95, 95, 95);
  width: 30vw;
}
.admin-container .search-bar ion-icon {
  margin-top: 0.5vh !important;
}

.admin-container .search-bar:focus {
  outline: none;
  border: 2px solid rgb(223, 222, 222);
}
.admin-display-container {
  background: white;
  height: 20vh;
}
.create-seller-btn {
  margin: auto 0.8em;
  padding: 0.5em 2em;
  background-color: #01c5a1;
  border: 2px solid whitesmoke !important;
  border-radius: 0.5em;
  color: white;
  transition: all 0.3s;
} 

.create-seller-btn:hover, ion-icon:hover{
  background-color: #029d80;
  box-shadow: 2px 2px 5px #f9f9f9;
  cursor: pointer;
}


.grid-container {
  border-radius: 3%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1em;
  padding: 5vh 5vh;
  scroll-behavior: smooth;
}
@media screen and (max-width: 950px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
  .admin-container-banner{
    width: 82vw;
  }
}

@media screen and (max-width: 700px) {
  .grid-container {
    grid-template-columns: 2fr;
  }
   .admin-container-banner{
    width: 75vw !important;
  }
  .admin-container .search-bar {
    padding: 0.5em;
    border-radius: 0.5em !important;
    border: 2px solid #f9f9f9;
    -moz-columns: #f2f2f2;
    columns: #f2f2f2;
    color: rgb(95, 95, 95);
    width: 48vw;
  }
} 

 @media screen  and(max-width:450px){
    .create-seller-btn{
    margin: 0.3em 0 0.6em;
    padding: 0.7em 1em;
    background-color: #01c5a1;
    border: 2px solid whitesmoke !important;
    border-radius: 0.5em;
    color: white;
    transition: all 0.3s;
    font-size: x-small;
    }
    .admin-container-banner{
        width: 75vw !important;
        height: 17vh !important;
    }

} 
</style>