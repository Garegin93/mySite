<template>
  <main class="main">
    <app-about-me></app-about-me>
    <app-skills></app-skills>
    <app-experience></app-experience>
    <app-education></app-education>
    <app-portfolio></app-portfolio>
    <app-feedback></app-feedback>
    <app-contact></app-contact>
  </main>
</template>

<script>
import AppAboutMe from "@/components/main/apps/AppAboutMe";
import AppSkills from "@/components/main/apps/AppSkills";
import AppExperience from "@/components/main/apps/AppExperience";
import AppEducation from "@/components/main/apps/AppEducation";
import AppPortfolio from "@/components/main/apps/AppPortfolio";
import AppFeedback from "@/components/main/apps/AppFeedback";
import AppContact from "@/components/main/apps/AppContact";

export default {
  components: {
    AppAboutMe,
    AppSkills,
    AppExperience,
    AppEducation,
    AppPortfolio,
    AppFeedback,
    AppContact
  }
}
</script>

<style scoped
       lang="scss">
@import "../../style";

.main {
  padding-top: 90px;
}

@include respond-to(991px) {
  .main {
    padding-top: 80px;
  }
}
</style>