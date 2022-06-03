<template>
  <HeaderCont />
  <main id="main">
    <section class="refer__cont">
      <TitleCont name1="reference" name2="book" />
      <div class="container">
        <div class="refer__inner"></div>
      </div>
      <ContactCont />
    </section>
  </main>
  <FooterCont />
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
  },
};
</script>
