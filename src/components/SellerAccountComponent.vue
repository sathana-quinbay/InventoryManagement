<template>
    <b-container>
        <b-row>
            <b-col>
               
                <div class="card">
                    <div class="avatar">SV</div>
                    <h1>John Doe</h1>
                    <p class="title">CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <div style="margin: 24px 0;">
                        <a href="#"><i class="fa fa-dribbble"></i></a> 
                        <a href="#"><i class="fa fa-twitter"></i></a>  
                        <a href="#"><i class="fa fa-linkedin"></i></a>  
                        <a href="#"><i class="fa fa-facebook"></i></a> 
                    </div>
                    <p><button>Contact</button></p>
                    </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script src="./scripts/SellerAccountComponent.js"></script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;

  color: black;
}
.avatar
{
    background: blueviolet;
    color: white;
     vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
button:hover, a:hover {
  opacity: 0.7;
}
</style>