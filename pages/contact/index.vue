<template>
  <main id="contact-page">
    <v-sheet height="60px" />
    <v-container>
      <v-row>
        <v-col v-if="!mailSent">
          <v-row>
            <v-col>
              <h1 class="display-1 font-weight-medium text-center">Get In Touch</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-form
                @submit.prevent="submitForm"
                ref="form"
                style="max-width: 600px"
                class="mx-auto"
              >
                <v-row class="mb-n7">
                  <v-col>
                    <v-text-field
                      :disabled="loading === true"
                      style="border-radius:0"
                      outlined
                      type="text"
                      label="First Name"
                      v-model="contactData.firstName"
                      :rules="rules.name"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      :disabled="loading === true"
                      v-model="contactData.lastName"
                      style="border-radius:0"
                      outlined
                      type="text"
                      label="Last Name"
                      :rules="rules.name"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mb-n7">
                  <v-col>
                    <v-text-field
                      :disabled="loading === true"
                      style="border-radius:0"
                      outlined
                      type="email"
                      :rules="rules.email"
                      v-model="contactData.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mb-n7">
                  <v-col>
                    <v-text-field
                      :disabled="loading === true"
                      style="border-radius:0"
                      outlined
                      type="text"
                      :rules="rules.name"
                      v-model="contactData.companyName"
                      label="Company Name"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mb-n7">
                  <v-col>
                    <v-select
                      :disabled="loading === true"
                      style="border-radius:0"
                      :items="selectItems"
                      outlined
                      label="Industry"
                      v-model="contactData.industry"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row class="mb-n7">
                  <v-col>
                    <v-text-field
                      :disabled="loading === true"
                      style="border-radius:0"
                      outlined
                      type="text"
                      :rules="rules.contact"
                      label="Contact No."
                      v-model="contactData.contact"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mb-n7">
                  <v-col>
                    <v-textarea
                      :disabled="loading === true"
                      style="border-radius:0"
                      outlined
                      name="input-7-1"
                      label="Queries ( if any )"
                      v-model="contactData.query"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row class="mt-5">
                  <v-col class="d-flex justify-center">
                    <v-btn
                      block
                      style="border-radius: 2px; font-size:19px; border:2px solid rgba(0,0,0,.27)"
                      height="44px"
                      class="text-capitalize font-weight-bold mb-3"
                      color="primary"
                      @click="submitForm"
                      :loading="loading"
                    >Submit</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-else>
          <h1 class="display-1 text-center font-weight-medium">Thank you for reaching out to us!</h1>
          <p
            class="section-sub-heading text-center"
          >Your Query was successfully delivered! We will get back to you at the earliest!</p>
        </v-col>
      </v-row>
    </v-container>
    <v-sheet height="60px" />
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      contactData: {
        firstName: "",
        companyName: "",
        lastName: "",
        email: "",
        contact: "",
        industry: "",
        query: ""
      },
      rules: {
        name: [v => v.length === 0 && "Field cannot be left empty"],
        email: [
          v => v.length === 0 && "Field cannot be left empty !",
          v =>
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
            ) || "Invalid Email address"
        ],
        contact: [v => v.length === 0 && "Field cannot be left empty"]
      },
      selectItems: [
        "Restaurants",
        "Hospitality",
        "Gyms And Fitness",
        "Corporate",
        "Health Care",
        "Retail",
        "Sports",
        "Others"
      ]
    };
  },
  computed: {
    ...mapGetters(["loading", "mailSent"])
  },
  methods: {
    ...mapActions(["sendMail"]),
    submitForm() {
      if (this.$refs.form.validate()) {
        const fullName = this.contactData.firstName + this.contactData.lastName;

        const data = { ...this.contactData };

        delete data.firstName;
        delete data.lastName;

        data["name"] = fullName;

        this.sendMail(data);
      }
    }
  }
};
</script>