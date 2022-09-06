import { reactivateSellerAccount, deleteAndCreateSellerAccount } from '@/service/SellerAccountService'
export default {
    name: 'RegisterComponent',
    data() {
        return {

            seller: {
                name: '',
                emailId: '',
                contact: '',
                address: '',
                password: ''

            },
            alertMessage: "",
            dismissSecs: 10,
            dismissCountDown: 0,
            checkPassword: '',
            passwordErrorFlag: false,
            nameErrorFlag: false,
            nameErrorMessage: "",
            emailErrorMessage: "",
            contactErrorMessage: "",
            addressErrorMessage: "",
            addressErrorFlag: false,
            passwordError: '',
            contactErrorFlag: false,
            confirmPasswordErrorFlag: false,
            emailIdErrorFlag: false,
            isRegisterSuccess: false,
            userMessage: ""
        }
    },
    watch: {
        "seller.name"() {

            this.nameCheck()
        },
        "seller.emailId"() {
            this.checkEmailId()

        },
        "seller.contact"() {
            this.contactCheck()
        },
        "seller.password"() {
            this.passwordCheckCall()
            
        },
        "checkPassword"()
        {
            this.confirmCheck()
        },
        "seller.address"()
        {
            this.addressCheck()
        }
    },
    methods: {
        nameCheck() {
            if (this.userNameCheck(this.seller.name) != 'true') {
                this.nameErrorFlag = true;
                this.nameErrorMessage = this.userNameCheck(this.seller.name)
            } else {
                this.nameErrorFlag = false
                this.nameErrorMessage = ''
            }
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
        checkEmailId() {
            if (this.seller.emailId.length == 0) {
                this.emailIdErrorFlag = true;
                this.emailErrorMessage = 'Field is required'

            } else if (!this.checkEmail(this.seller.emailId)) {
                this.emailIdErrorFlag = true;
                this.emailErrorMessage = 'Invalid email Id'
            }
            else {
                this.emailIdErrorFlag = false;
                this.emailErrorMessage = ''
                this.confirmCheck()
            }
        },
        confirmCheck() {
            if (this.checkPassword.length==0 || this.seller.password.length==0) {

               
                this.confirmPasswordErrorFlag = true;
                this.passwordError = "Please enter fields"
            }
            else{
                if (this.checkPassword != this.seller.password) {

                    console.log(this.checkPassword, " ", this.seller.password)
                    this.confirmPasswordErrorFlag = true;
                    this.passwordError = "Does not match"
                }
                else {
    
                    this.confirmPasswordErrorFlag = false;
                    
                        this.passwordError=""

                   
                }

            }
            
        },
        passwordCheckCall() {
            if (this.passwordCheck() != 'true') {
                console.log("inside pass check", this.passwordCheck())
                this.passwordErrorFlag = true

                this.passwordError = this.passwordCheck()

                console.log("errmesss", this.passwordError, this.passwordError)


            }
            else {
                this.passwordErrorFlag = false;
                this.passwordError = ''
                this.confirmCheck()
            }

        },
        // hasWhiteSpace(s) {
        //     return /\s/g.test(s);
        //   }
        passwordCheck() {

            var error = "true"
            if (this.seller.password.includes(" ")) {
                return ("Must not contain white space");
            }
            if (this.seller.password.length < 8) {
                return ("Your password must be at least 8 characters");
            }
            if (this.seller.password.search(/[a-z]/) < 0) {
                return ("Your password must contain at least one letter.");
            }
            if (this.seller.password.search(/[^A-Za-z0-9]/) < 0) {
                return ("Your password must contain special character");

            }
            if (this.seller.password.search(/[A-Z]/) < 0) {
                return ("Your password must contain at least one capital letter.");
            }
            if (this.seller.password.search(/[0-9]/) < 0) {
                return ("Your password must contain at least one digit.");
            }
            console.log(error)
            return error;

        },
        trimValue(varible) {

            this.seller[varible] = this.seller[varible].replace(/^\s+|\s+$/gm, '')
        },

        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        clearForm() {
            this.seller = {
                name: '',
                emailId: '',
                contact: '',
                address: '',
                password: ''

            }
            this.checkPassword = '';
           
        },
        checkEmail(emailCheck) {
            var regexLetters = new RegExp('^[a-zA-Z]')
            if (!regexLetters.test(emailCheck)) return false
            if (emailCheck.length < 3) return false

            if (emailCheck[0] >= 'a' && emailCheck[0])
                var dot_Count = 0;
            var letter = '.'
            var at_Count = 0;
            for (var position = 0; position < emailCheck.length; position++) {
                if (emailCheck.charAt(position) == letter) {
                    dot_Count += 1;
                }
                if (emailCheck.charAt(position) == '@') {
                    at_Count += 1
                }
            }
            var strArr = emailCheck.split("@")
            var atSymbol = emailCheck.indexOf("@");
            var dot = emailCheck.indexOf(".");
            if (at_Count == 2) return false

            var regex = new RegExp('^[a-zA-Z.]+$')

            strArr = strArr[1]
            if (dot_Count == 0) return false
            if (!regex.test(strArr)) return false
            if (atSymbol < 1 || atSymbol == emailCheck.length - 1) return false;
            if (emailCheck.indexOf("..") >= 1 || emailCheck[0] == '.' || emailCheck[emailCheck.length - 1] == '.') return false
            if (dot_Count == 1 && dot <= atSymbol + 2) return false;
            if (dot == atSymbol + 1) return false
            return true;
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

        registerNewSeller() {
            
           this.nameCheck()
           this.checkEmailId()
           this.contactCheck()
           this.passwordCheckCall()
           
           this.addressCheck()

            console.log(this.seller.emailId)

  

            // if (this.seller.contact.match(/^(\+\d{2}[- ]?)?\d{10}$/g, "") === null) {

            //     this.contactErrorMessage = 'Invalid '
            //     this.contactErrorFlag = true;

            // }

           

            console.log(this.emailIdErrorFlag)
            console.log(this.contactErrorFlag);
            console.log(this.confirmPasswordErrorFlag);
            console.log(this.addressErrorFlag);
            console.log(this.passwordErrorFlag)
            console.log(this.nameErrorFlag);
            if (!this.emailIdErrorFlag && (!this.passwordErrorFlag) && (!this.contactErrorFlag) && (!this.confirmPasswordErrorFlag) && (!this.nameErrorFlag) && (!this.addressErrorFlag)) {
                console.log("inside register call")
                this.confirmPasswordErrorFlag = false;
                this.passwordError = " "
                this.contactErrorFlag = this.passwordErrorFlag = false;
               
                this.$store.dispatch('REGISTER_NEW_SELLER', {
                    success: (response) => {
                        console.log("sucessregister", response);
                        
                        if(response.data.httpStatusCode==400)
                        {

                            this.userMessage = response.data.message
                            this.showAlert()
                        }
                        else if(response.data.httpStatusCode==200) {
                            if (response.data.message == 'reactivate') {
                                this.showModal()
                            }
                            else if (response.data.message == 'Created successfully ..') {
                                this.userMessage = "successfully registered"
                                this.$router.push({path:'/login'})

                            }
                           
                            
                        }


                    },
                    error: (err) => {

                        console.warn("New Merchant could not be registered. | " + err);
                    },
                    seller: this.seller
                })
            }
        },
        reactivate() {
            var sellerId = this.seller.emailId;
            this.hideModal()
            reactivateSellerAccount({
                success: (response) => {

                    this.userMessage = "Your old account is reactivated try to login"
                    this.showAlert()
                    console.log(response);
                    this.$router.push({path:"/login"})
                },
                error: (err) => {
                    console.warn(err);
                    this.userMessage = "Something went wrong try again after some time"
                    this.showAlert()
                },
                payload: sellerId

            })
        },
        deleteAndCreateNew() {
            var seller = this.seller
            this.hideModal()
            deleteAndCreateSellerAccount({
                success: (response) => {
                    if(response.data.httpStatusCode==400)
                    {
                        this.showAlert()
                        this.userMessage=response.data.message
                    }
                    console.log(response);
                    this.userMessage = "Created account successfully"
                    this.showAlert()
                   
                    this.registerNewSeller()

                },
                error: (err) => {
                    this.userMessage = "Something went wrong try again aftre some time"
                    this.showAlert()
                    console.warn(err);
                },
                payload: seller

            })

        },
        countDownChanged(c) {

            this.dismissCountDown = c;
            // if(c==0)
            // {
            //     this.$router.push({path:"/login"})
            // }
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs;
        },
        resetFields() {
            this.seller = {
                name: '',
                emailId: '',
                contact: '',
                address: '',
                password: ''
            };
        }
    }
}