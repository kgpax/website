import { Page, Segment, Paragraph } from '../components';

const SiteBuild001 = (props) => (
  <Page {...props}>
    <Segment heading="Lessons learned">
      <Paragraph>
        I was probably a little hasty in putting the site live. As soon as I had
        notified the twittersphere **(link to tweet) about my new venture, I
        decided to actually check for the first time how it looked on my phone.
      </Paragraph>
      <Paragraph>
        It wasn't good 😬 **(emoji component with a11y and larger icon)
      </Paragraph>
      <Paragraph>
        There was barely any padding around the content on mobile, making it
        particularly bad on any device with a notch, and my attempt at
        vertically centering content on the homepage had backfired as the
        content itself was bigger than the viewport. For a front-end developer
        who claims to have an eye for design, this was all a bit of a mis-step
        and a lesson learned about not getting carried away with publishing to
        live.
      </Paragraph>
      <Paragraph>
        I'd also noticed some things which I wasn't happy about in hindsight
        about my content. I'd used the phrase "I toyed with..." three separate
        times, which made me wish I had proof-read it sooner and been a bit more
        varied with my language. However, I decided to set myself a rule for
        this website; that I will not go back and change any content I have
        published, except to correct any glaring typos or broken links. The
        content can stay with all its warts and hairs and we will see if my
        copywriting improves over time.
      </Paragraph>
      <Paragraph>
        ...and yes, for those of you just noticing, I am quite self-critical. I
        don't beat myself up too much, I just **(something something)
      </Paragraph>
    </Segment>
    <Segment heading="Back to the site">
      <Paragraph>Test</Paragraph>
    </Segment>
  </Page>
);

export default SiteBuild001;
