import {
  Page,
  Segment,
  Paragraph,
  CodeBlock,
  ImageBlock,
  Link as L,
  ExternalLink as EL,
  Code as C,
  Emoji as E,
} from '@components';
import { getPageProps } from '@utils/site';

const SiteBuild004 = props => (
  <Page {...props}>
    <Segment heading="What year is it?">
      <Paragraph>
        Well then... seems that some time back in May 2021, I set out to further
        enhance the development experience of this site by focussing on getting
        some testing strategies and tools in place, and sharing my journey and
        my findings.
      </Paragraph>
      <Paragraph>
        That didn't happen. <E alt="thumbs down">👎</E>
      </Paragraph>
      <Paragraph>
        Instead, we find ourselves here; comfortably tucked into 2022 with no
        further progress made, but with a new promise made to myself to pour
        some love &mdash; and effort &mdash; back into building out this site.
      </Paragraph>
      <Paragraph>
        A lot can happen in 8 months; for instance &mdash;{' '}
        <EL href="https://formidable.com/about/kevin-paxton/">
          I've got a new job
        </EL>
        , working with the amazing folk at{' '}
        <EL href="https://formidable.com">Formidable</EL>. It's a fantastic
        company and moving there honestly ranks as one of the best choices I've
        made. It has given me the opportunity to focus again on front-end web
        development, and less on back-end infrastructure, and to work alongside
        crazily smart people, building interesting new features and learning
        lots of new things.
      </Paragraph>
      <Paragraph>
        Well... they're new to me anyway &mdash; which is an ideal segue into
        what this entry is all about.
      </Paragraph>
    </Segment>
    <Segment heading="What have I been doing?">
      <Paragraph>
        There has been no particular reason why I've had such a long absence
        from updating the site, but I've not had any particular motivation to do
        so either.
      </Paragraph>
      <Paragraph>
        Until now! <E alt="thumbs up">👍</E>
      </Paragraph>
      <Paragraph>
        Recall that I said in my{' '}
        <L href="/blog/site-build-001#picking-the-tech-stack">first post</L>{' '}
        that I'd considered using this website build as an opportunity to look
        into NextJS, Gastby or Eleventy... well my first project in my new role
        has me working on a NextJS application, and now that I've got some real
        world exposure to it, it really seems wrong <strong>not</strong> to
        migrate the SPA website to NextJS, with all of its{' '}
        <EL href="https://nextjs.org/docs/basic-features/pages#server-side-rendering">
          SSR
        </EL>{' '}
        bells and{' '}
        <EL href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">
          SSG
        </EL>{' '}
        whistles.
      </Paragraph>
      <Paragraph>
        So, this post is going to cover the journey of migrating a plain ol'
        React app to NextJS, along with my learnings of NextJS so far.
      </Paragraph>
    </Segment>
    <Segment heading="Benefits of SSR">
      <Paragraph>
        I'd heard of Server Side Rendering before, but had never actually
        utilised it anywhere. I knew of its main benefits being less javascript
        (and subsequently labour) shipped to the browser, and having the page
        content present in the response from the server which helps to get those
        SEO brownie-points.
      </Paragraph>
      <Paragraph>
        However, I've never really considered some of the more general benefits
        you get from SSR....
      </Paragraph>
    </Segment>
    <Segment heading="SSR or SSG?">TODO</Segment>
  </Page>
);

export async function getServerSideProps(context) {
  return {
    props: { ...getPageProps(context) },
  };
}

export default SiteBuild004;
