<template>
  <main id="where-page">
    <SectionBanner full="true">
      <template slot="title">Where</template>
      <template
        slot="sub-text"
      >Create playlists in few clicks and manage all your screens in real-time through your Signbees Dashboard using any browser on PC or Tablet.</template>
    </SectionBanner>

    <section class="section-place" v-for="(item, i) in where" :key="i">
      <v-container fluid class="pa-0">
        <v-layout row :style="`flex-direction: ${item.imgRight ? 'row' : 'row-reverse'}`">
          <v-col
            class="d-flex align-center"
            :class="!item.imgRight ? 'col-sm-6' : 'col-sm-5 offset-1'"
          >
            <v-sheet>
              <h2 class="section-heading mb-3">{{item.title}}</h2>
              <p class="section-sub-heading mb-5" v-html="item.text" style="width:562px"></p>

              <ul style="list-style:none" class="pl-0">
                <li
                  v-for="(listItem, idx) in item.list"
                  :key="idx"
                  style="text-indent:-22px; margin-left:22px"
                  class="mb-5 section-sub-heading"
                >
                  <span class="oval mr-2"></span>
                  {{listItem}}
                </li>
              </ul>

              <v-btn
                v-if="item.btn"
                href="#"
                nuxt
                style="border-radius: 2px; text-transform: none"
                color="primary"
                height="48px"
                width="135px"
              >Sign up free</v-btn>
            </v-sheet>
          </v-col>
          <v-col sm="6" class="pa-0">
            <v-img :src="item.img" alt contain></v-img>
          </v-col>
        </v-layout>
      </v-container>
    </section>
  </main>
</template>

<script>
import pubsImg from "~/assets/img/where/pubs.png";
import hotelImg from "~/assets/img/where/hotel.png";
import gymImg from "~/assets/img/where/gym.png";
import officeImg from "~/assets/img/where/office.png";

import SectionBanner from "~/components/Ui/SectionBanner/SectionBanner";

export default {
  components: {
    SectionBanner
  },
  data() {
    return {
      where: [
        {
          title: "Restaurants/Pubs/Lounges",
          img: pubsImg,
          text:
            "Restaurant digital signage is quickly becoming a standard feature in QSRs, fast casual restaurants, bars, and fine dining. Digital signs in the restaurant improve customer communications and create a livelier atmosphere:",
          list: [
            "Create Digital Menu",
            "Display vibrant and dynamic menus and daily specials.",
            "Announce events and offers",
            "Promote sales, new menu items, or seasonal promotions",
            "Engage customers with latest social media posts and reviews",
            "Reduce costs on promotional and informational materials production",
            "Generate Additional Add revenue"
          ],
          btn: true,
          imgRight: true
        },
        {
          title: "Hospitality",
          img: hotelImg,
          text:
            "Hotels are a transition point for visitors, which makes the customers a ready and willing audience for information about the hotel itself and the locale. <br /> The world of hotels is witnessing a trend of installing more and more digital displays in hotels, as hoteliers have seen the impact of hospitality signage on the guest experience.",
          list: [
            "Leverage your screens to Engage Guests",
            "Broadcast latest news, Local attractions and tourist information",
            "Promote special offers for rooms or in restaurants",
            "Display Availability of conference rooms",
            "Share videos, promotions and activities on multiple screens in lobbies, hotel rooms and lounges.",
            "Generate additional revenue through advertising content"
          ],
          btn: true
        },
        {
          title: "Gyms, Rec & Fitness",
          img: gymImg,
          text:
            "In response to the demand for cutting-edge digital signage solutions, our solutions are designed to enhance member experience, improve the efficiency of communications with members and visitors, and provided fitness centers with a new kind of branding that is hot, trending and eye-catching.",
          list: [
            "Promote gym services e.g. Pilates or Spin classes",
            "Showcase health and well-being tips",
            "Promote club offers or loyalty programs",
            "Reinforce gym safety rules",
            "Stream instructional and training videos",
            "Post the schedules for the fitness classes",
            "Display vendor ads to earn advertising subsidies",
            "Highlight local customer success stories for motivation"
          ],
          btn: false,
          imgRight: true
        },
        {
          title: "Corporate",
          img: officeImg,
          text:
            "Internal communicators see digital signage as a dynamic and intelligent communication platform. Using Signbees, communicators can share engaging and relevant content such as workplace posters with HR info and motivational messages, traffic , a menu for the cafeteria, weather,and  news, community events.",
          list: [
            "Leverage your screens to Engage Guests",
            "Display company announcements",
            "Display productivity metrics",
            "Ensure a safe workplace by displaying emergency alerts and instructions on what to do",

            "Display building and staff directories",
            "Recognize employee achievements and important events such as Birthdays,  and anniversaries",
            "Reinforce and control company branding"
          ]
        },
        {
          title: "Retail",
          text:
            "Digital signage is one of the most distinct ways that businesses have been making the shopping experience easier, smarter and more efficient. <br /> Now it’s turn to create more meaningful engagements with the right promotion, to the right customer, at the right time",
          list: [
            "Promote new products, special offers, and sales using in-store retail signage displays.",
            "Attract additional foot traffic using the vividness of your digital displays.",
            "Showcase product features on your digital screens to encourage engagement."
          ],
          imgRight: true
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.section-place {
  // height:726px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #f7f7f7;
}
</style>