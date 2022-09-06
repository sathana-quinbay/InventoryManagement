<template>
  <div class="main-body">
    <div class="main-body-content">
      
      <div class="main-body-heading">
      <h4>Import Products</h4>
      <h6>Bulk upload your products</h6>
    </div>
    <div class="main-body-container">
      <b-container-fluid>
        <b-row>
          <b-col>
            <div>
              <h6 class="required">Field must be in csv format</h6>

              <button class="download_csv" @click="download_csv_file">
                Download sample file
              </button>
            </div>
          </b-col>
        </b-row>
        <b-row class="uploadCsv">
          <!-- <b-col >
             <h6>Upload csv file</h6>
             <label class="btn btn-default">
      <input type="file" ref="file" @change="selectFile" />
    </label>
    <button class="btn btn-success" :disabled="!selectedFiles" @click="uploadFile">
      Upload
    </button>
        </b-col> -->
          <b-col>
            <h6>Upload csv file</h6>
            <div class="uploadDiv">
                <input @change="addFileInput" type="file" ref="file" style="display:none" />
                
              <div v-cloak @drop.prevent="addFile" @dragover.prevent @click="$refs.file.click()">
                <b-icon-cloud-arrow-up></b-icon-cloud-arrow-up>
                <h6>Drag and drop a fileto upload</h6>
              </div>
            </div>

            
           
          </b-col>

        </b-row>
        <b-row class="fileDiv">
            <b-col cols="12" lg="8" md="6" sm="12">
             
        <ul>
              <li v-for="file in files" :key="file.size">
                {{ file.name }} ({{ file.size | kb }} kb)
                <button class="binButton" @click="removeFile(file)" title="Remove">
<b-icon-trash-fill></b-icon-trash-fill>
                </button>
                 <div v-if="file?.size >10000">soo large</div>
              <div v-else>fine</div>
              </li>
            </ul>
            </b-col>
           
        </b-row>
        <b-row>
            <b-col  cols="12" lg="6" md="12" sm="12" >
                <table class="tableBordered">
                    <tr v-for="item in items" :key="item.id">
                        <td>
                          {{item.Fields}}
                        </td>
                        <td :class="item.condition?'requiredText':'optional'">
                            {{item.condition?'This Field is required':'Field optional'}}
                        </td>
                    </tr>
                </table>
            </b-col>
        </b-row>
        <b-row class="uploadButtonDiv">
           <b-alert class="alertMessageText" :show="dismissCountDown"
             dismissible
             variant="warning"
             @dismiss-count-down="countDownChanged">
       {{userMessage}} <span class="seconds">{{dismissCountDown}} seconds...</span>
    </b-alert>
             <b-col  cols="12" lg="6" md="6" sm="12">
 <button v-if="this.files.length!=0" class="uploadButton" :disabled="uploadDisabled" @click="uploadFileNow">Upload</button>
            </b-col>
        </b-row>
      </b-container-fluid>
    </div>
    </div>
  </div>
</template>
<style scoped>
.alertMessageText
{
  text-align: center;
}
.seconds
{display: none;}
.uploadButtonDiv
{
    margin-top:3%;
}
.requiredText
{
    color: #0f9d58;;
}
.optional
{
    color: #2aa4f4;
    
}
table, td, th {  
    font-family: sans-serif;
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
    font-size: 14px;
  padding: 10px 15px;
}
.uploadButton
{
    background: green;
    border:none;
    width: 200px;
    padding: 2%;
    color: white;
    border-radius: 5px;

}
.binButton{
    background: none;
    border: none;
    color: red;
}
.fileDiv
{
    margin-top:2%;
}
@media screen and (max-width:600px) {
  .addCsv {
    min-width: 103px;
    background: #1b2850;
    color: #fff;
    font-size: 14px;
    border: none;
    text-decoration: none;
    border-radius: 10px;
    font-weight: 700;
    padding: 3px 10px;
    padding: 5px 10px;
}
.download_csv {
    width: 100%;
    background: #ff9f43;
    color: #fff;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    padding: 14px 10px;
}
  
}
li{
    list-style-type: none;
}
.uploadCsv {
  margin-top: 2%;
}
.uploadCsv h6 {
  color: black;
  font-size: 14px;
}
.uploadDiv h6 {
  font-size: 14px;
}
.download_csv {
  min-width: 120px;
  background: #ff9f43;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  padding: 14px 10px;
 
}
.download_csv:hover {
  background: #ff8e25;
}

.required {
  font-size: 14px;
  color: #637381;
}
.main-body-content
{
  margin:1% 2%;
}
.main-body {
   padding:1% 2%;
  background: #fafbfe;
  padding: 1%;
  text-align: left;
  font-family: sans-serif;
}
.main-body-heading h4 {
  font-size: 14px;
}
.main-body-heading h6 {
  font-size: 14px;
  color: #555;
  font-weight: 400;
}
.main-body-container {
  margin: 0 0 25px;
  border: 1px solid #e8ebed;
  border-radius: 6px;
  background: white;
  padding: 20px;
}

.uploadDiv {
  text-align: center;
  border: 1px solid #e8ebed;
  border: 1px solid #e8ebed;
  border-radius: 6px;
  background: white;
  padding: 20px;
  max-height: 100px;
}
</style>
<script src="./scripts/ImportProductComponent.js">
</script>