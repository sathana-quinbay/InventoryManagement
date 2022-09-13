export default{
    methods:{
        userNameRegisterCheck() {
            if (this.userNameCheck(this.seller.name) != 'true') {
                this.nameErrorFlag = true;
                this.nameErrorMessage = this.userNameCheck(this.seller.name)
            } else {
                this.nameErrorFlag = false
                this.nameErrorMessage = ''
            }
        },
        addressCheck()
        {
             if (this.seller.address.length < 15  ) {
                this.addressErrorFlag = true;
                this.addressErrorMessage = "Invalid Address"
            }
            else if(this.seller.address.length >= 150)
            {
                this.addressErrorFlag = true;
                this.addressErrorMessage = "Maximum 150 characters"
            }
            else{
                this.addressErrorFlag = false;
                this.addressErrorMessage = ""
            }

        },
        userNameCheck(name) {
            var userName = new RegExp('^[a-zA-Z . ]+$')
            
            if ( name.length < 3) return "Required atleast 3 characters"
            if (!userName.test(name)) return "must contain alphabets only"
            if (name[0] == '.') return "Name must not start with dot"
            if (name[name.length - 1] == '.') return "Name must not end with dot"
            if (name.length>15) return "Maximum 15 characters"
            return "true"
        },
        
        contactCheck() {
            if (this.seller.contact.match(/^(\+\d{2}[- ]?)?\d{10}$/g, "") === null) {

                this.contactErrorMessage = 'Invalid '
                this.contactErrorFlag = true;
            }
            else{
                this.contactErrorMessage = ''
                this.contactErrorFlag = false;

            }
        },
    }
}