<template>
    <main>
        <v-container class="text-center text-md-center container-styles">
            <v-row justify-center>
                <v-col row col="12">
                    <v-card elevation="4" class="card-styles" width="450" height="500">
                        <v-card-title class="pa-7">
                            <v-img width="60px" contain height="60px" :src="require('~/assets/img/logo@2x.png')" :srcset="`${require('~/assets/img/logo@2x.png')} 2x, ${require('~/assets/img/logo@3x.png')} 3x`" ></v-img>
                        </v-card-title>
                        <div class="pa-4" v-if="!passwordUpdatedSuccessfully">
                            <h2 class="display-1 mt-2 mb-4">Reset Password</h2>
                            <v-form ref="form">
                                <v-container style="width:90%">
                                    <v-row>
                                        <v-col col="12">
                                            <v-text-field :type="show ? 'text' : 'password'" @click:append="show = !show" required :rules="passRules" label="Enter New Password" v-model="newPassword"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="12" class="pt-0">
                                            <v-text-field class="pt-0" :type="show ? 'text' : 'password'" @click:append="show = !show" required :rules="passwordMatchRules" label="Confirm Password" v-model="confirmedPassword"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row row justify-center>
                                        <v-col col="12">
                                            <v-btn block :loading="buttonClicked" @click="updatePassword" color="primary">Reset Password </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </div>
                        <div class="pa-4" v-else>
                            <h2 class="mt-2 px-3 mb-4"> Your Password was successfully reset. Please use your new password to log in to your account. </h2>
                            <v-btn color="rgba(254,209,3)" class="ma-5"> 
                                <a href="https://dashboard.signbees.com" style="text-decoration:none;color:black">Login Now</a >
                            </v-btn> 
                        </div> 
                    </v-card> 
                </v-col> 
            </v-row> 
            <v-snackbar v-model="displaySnackbar" top right> {{ message }} 
                <v-btn icon @click="displaySnackbar = !displaySnackbar"> 
                    <v-icon>close</v-icon> 
                </v-btn> 
            </v-snackbar>                
        </v-container> 
    </main>
</template>
<script>
    export default {
        mounted(){
            this.$store.commit('changeHeaderFooterHideStatus', true);
        },
        destroyed(){
            this.$store.commit('changeHeaderFooterHideStatus', false);
        },
        data() {
          return {
            passwordUpdatedSuccessfully: false,
            displaySnackbar: false,
            message: "",
            show: false,
            showError: false,
            buttonClicked: false,
            newPassword: "",
            confirmedPassword: "",
            errorMessage: "",
            // passRules: [
            //   v => !!v || "Please Fill this field",
            //   v => /.{8,}/.test(v) || "8 Characters Minimum"
            // ],
            passRules: [
              v => !!v || "Required*",
              v =>
                (!!v && v.length > 7) ||
                "Password must have minimum 8 characters"
            ],
            passwordMatchRules: [
              v => !!v || "Required*",
              v => (!!v && v === this.newPassword) || "Passwords don't match"
            ]
          };
        },
        methods: {
          updatePassword() {
            if (!this.$refs.form.validate()) return;
            const url = window.location.toString();
            const params = url.split("=");
            const u = params[1].split("&");
            const uid = u[0];
            const token = params[2];
            this.buttonClicked = true;
            const updatePassword = firebase
              .functions()
              .httpsCallable("user-updatePassword");
            updatePassword({
              uid: uid,
              token: token,
              password: this.confirmedPassword
            })
              .then(res => {
                this.buttonClicked = false;
                this.displaySnackbar = true;
                this.passwordUpdatedSuccessfully = true;
                this.message = res.data.message;
              })
              .catch(error => {
                this.buttonClicked = false;
                this.displaySnackbar = true;
                if (error.code === "auth/network-request-failed") {
                  this.errorMessage =
                    "Internet connectivity issue. Please connect to the internet and try again.";
                } else {
                  this.message = error.message;
                }
              });
          }
        }
    }
    </script>
    <style>
      .container-styles {
        display: flex;
        align-items: center;
      }

      .logo-styles {
        height: 120px;
        width: 100%;
        display: flex;
        align-items: center;
        border-radius: 10px;
        text-align: center;
      }

      .card-styles {
        border-radius: 10px;
        margin: 0 auto;
      }
    </style>