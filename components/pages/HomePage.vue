<template>
  <div class="home">
    <IntroSection />
    <ExploreMap />
    <WorkSection />
    <NowSection />
    <ExperimentsSection />
    <ContactCta />
  </div>
</template>

<script>
import IntroSection from '../sections/IntroSection.vue';
import ExploreMap from '../sections/ExploreMap.vue';
import WorkSection from '../sections/WorkSection.vue';
import NowSection from '../sections/NowSection.vue';
import ExperimentsSection from '../sections/ExperimentsSection.vue';
import ContactCta from '../sections/ContactCta.vue';
import { setSeo, removeJsonLd } from '../../assets/js/seo.js';

export default {
  name: 'HomePage',
  components: {
    IntroSection,
    ExploreMap,
    WorkSection,
    NowSection,
    ExperimentsSection,
    ContactCta,
  },
  mounted() {
    setSeo({ path: '/' });
    removeJsonLd('breadcrumb');
    removeJsonLd('project');
  },
};
</script>
