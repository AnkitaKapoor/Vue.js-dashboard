<template>
  <div class="team">
    <h1 class="mx-10 my-10">Team</h1>
    <v-container>
      <v-title class="caption grey--text">My Projects</v-title>
      <v-card  v-for="project in myProjects" :key="project.title" >
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip
                small
                :color="`${project.status}`"
                :class="`v-chip--active white--text caption my-2`"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>

    <v-container>
       <v-title class="caption grey--text">All Projects</v-title>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="project in projects" :key="project.title">
          <v-expansion-panel-header>
            <v-layout row wrap :class="`pa-3 project ${project.status}`">
              <v-flex xs12 md6>
                <div class="caption grey--text">Project title</div>
                <div>{{ project.title }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Person</div>
                <div>{{ project.person }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Due by</div>
                <div>{{ project.due }}</div>
              </v-flex>
              <v-flex xs2 sm4 md2>
                <div class="right">
                  <v-chip
                    small
                    :color="`${project.status}`"
                    :class="`v-chip--active white--text caption my-2`"
                  >{{ project.status }}</v-chip>
                </div>
              </v-flex>
            </v-layout>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="caption grey--text">Content</div>
            <div>{{project.content}}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>

    <v-container text-center>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md3 lg3 v-for="teamperson in team" :key="teamperson.name">
          <v-card class="ma-3">
            <v-responsive class="pa-4">
              <v-avatar size="150" class="grey lighten-2">
                <img :src="teamperson.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ teamperson.name }}</div>
              <div class="grey--text">{{ teamperson.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn  color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Create a community forum",
          person: "The Net Ninja",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
      ],
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar: "/avatar-1.png"
        },
        {
          name: "Ryu",
          role: "Graphic designer",
          avatar: "/avatar-2.png"
        },
        {
          name: "Chun Li",
          role: "Web developer",
          avatar: "/avatar-3.png"
        },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/avatar-4.png"
        },
        {
          name: "Yoshi",
          role: "Sales guru",
          avatar: "/avatar-5.png"
        }
      ]
    };
  },

   computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'The Net Ninja' && project.status != 'complete'
      })
    }
  }

};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>
