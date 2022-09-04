import {uploadProductViaFile} from '@/service/SellerProductService'
export default{
    name:"ImportProductComponent",
    data(){
        return {
          dismissSecs: 10,
          dismissCountDown: 0,
          userMessage:"",
            csvFileData: [
                ['Samsung A3','Hello','Mobile','50000.00','45','imageul.png'],
               
             ],
             selectedFiles: undefined,
             files:[],
             items: [
               
                { id:1,Fields:'productName',condition:true },
                { id:2,Fields: 'description',condition:true },
                { id:3,Fields: 'category',condition:true},
                { id:4,Fields:'price' ,condition:true},
                { id:5,Fields:'quantity' ,condition:true },
                { id:6,Fields:'imageUrl' ,condition:true },
                { id:7,Fields:'emailId' ,condition:false }
              ]
        }

    },
    computed: {
        uploadDisabled() {
          return this.files.length === 0;
        }
      },
    methods:{
        selectFile() {
            this.selectedFiles = event.target.files[0];
          },
          uploadFile()
          {
            console.log("file upload")
            console.log(this.selectedFiles)
            var sellerId=localStorage.getItem('userId');
              let formData = new FormData();
              formData.append("file",this.selectedFiles);
            
              for (const pair of formData.entries()) {
                console.log(`${pair[0]}, ${pair[1]}`);
              }
              this.$store.dispatch('uploadFile',{formData,sellerId})
          },
       download_csv_file() {

            //define the heading for each row of the data
            var csv = 'productName,description,category,price,quantity,imageUrl\n';
            
            //merge the data with CSV
            this.csvFileData.forEach(function(row) {
                    csv += row.join(',');
                    csv += "\n";
            });
         
            //display the created CSV data on the web browser 
            document.write(csv);
        
           
            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';
            
            //provide the name for the CSV file to be downloaded
            hiddenElement.download = 'sampleProduct.csv';
            hiddenElement.click();
            // document.removeElement('a')
            location.reload();
        },
        addFile(e) {
            let droppedFiles = e.dataTransfer.files;
            console.log(droppedFiles)
            this.files=[];
            if(!droppedFiles) return;
            // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
            ([...droppedFiles]).forEach(f => {
              this.files.push(f);
            });
            this.$refs.file.value = null;
            
          },
          uploadFileNow()
      {
        console.log("file upload")
        console.log(this.selectedFiles)
        var sellerId=localStorage.getItem('userId');
          let formData = new FormData();
          formData.append("file",this.files[0]);
         console.log(this.files[0])
          for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
          }
          var payload={
            formData,
            sellerId
        }
         
        uploadProductViaFile({
                
          success: ({ data }) => {
              console.log("import product")
              console.log(data)
              
              if(data.message=='success')
              {
                this.$refs.file.value = null;
                this.files=[]
                this.userMessage="Products Added Successfully"
                
              }
              else{
                this.userMessage=data.message
              }
              this.showAlert()
          },
          error: (e) => {
             
              console.warn(e);
          },
          payload

      })
      },
      countDownChanged(c) {
           
        this.dismissCountDown = c;
        if(c==0)
        {
            this.userMessage=""
        }
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs;
      },
          addFileInput()
          {
            console.log("add file")
            this.files=[];
            this.files.push(event.target.files[0]) ;
            this.$refs.file.value = null;
          },
          removeFile(file){
            this.files = this.files.filter(f => {
              return f != file;
            });      
          },
          upload() {
            
            let formData = new FormData();
            this.files.forEach((f,x) => {
              formData.append('file'+(x+1), f);
            });
            
            fetch('https://httpbin.org/post', {
              method:'POST',
              body: formData
            })
            .then(res => res.json())
            .then(res => {
               console.log('done uploading', res);
            })
            .catch(e => {
              console.error(JSON.stringify(e.message));
            });
            
          }
        }

    }
